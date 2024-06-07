import PlanterConfig from '#models/planter_config'
import User from '#models/user'
import { newBuildvalidator } from '#validators/new_build'
import { updateUserValidator, updateUserWithPasswordValidator } from '#validators/register'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class AdminController {
  async index({ view, auth }: HttpContext) {
    const id = auth.user?.$getAttribute('id')
    const firstName = auth.user?.$getAttribute('firstName')
    const allConfigs = await PlanterConfig.query().preload('user').where('user_id', id)
    const onlineConfigs = await PlanterConfig.query()
      .preload('user')
      .where('user_id', id)
      .where('is_active', true)
    const archivedConfigs = await PlanterConfig.query()
      .preload('user')
      .where('user_id', id)
      .where('is_active', false)
    const recentConfigs = await PlanterConfig.query()
      .preload('user')
      .where('user_id', id)
      .where('is_active', true)
      .orderBy('updated_at', 'desc')
      .limit(3)
    return view.render('pages/admin/dashboard', {
      planterConfigs: allConfigs,
      id: id,
      firstName: firstName,
      recentConfigs: recentConfigs,
      onlineConfigs: onlineConfigs,
      archivedConfigs: archivedConfigs,
    })
  }

  async active({ view, auth }: HttpContext) {
    const id = auth.user?.$getAttribute('id')
    const onlineConfigs = await PlanterConfig.query()
      .preload('user')
      .where('user_id', id)
      .where('is_active', true)
    return view.render('pages/admin/activeBuilds', {
      activeConfigs: onlineConfigs,
      id: id,
    })
  }

  async archived({ view, auth }: HttpContext) {
    const id = auth.user?.$getAttribute('id')
    const archivedConfigs = await PlanterConfig.query()
      .preload('user')
      .where('user_id', id)
      .where('is_active', false)
    return view.render('pages/admin/archivedBuilds', {
      id: id,
      archivedConfigs: archivedConfigs,
    })
  }

  async account({ view, auth }: HttpContext) {
    const user = await User.findOrFail(auth.user?.id)
    const firstName = auth.user?.$getAttribute('firstName')
    const lastName = user.lastName
    const githubHandle = auth.user?.$getAttribute('githubHandle')
    const email = auth.user?.$getAttribute('email')
    return view.render('pages/admin/accountSettings', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      githubHandle: githubHandle,
      user: user,
    })
  }

  async show({ view, params, auth }: HttpContext) {
    const allConfigs = await PlanterConfig.query().preload('user')
    const configDetail = allConfigs.find((config) => config.id === Number(params.id))
    const user = await User.findOrFail(auth.user?.id)
    if (configDetail && configDetail.userId === user.id) {
      return view.render('pages/admin/buildDetailPage', {
        configDetail: configDetail,
      })
    } else {
      return view.render('pages/errors/not_found')
    }
  }

  async updateActive({ view, request, params }: HttpContext) {
    const config = await PlanterConfig.findOrFail(params.id)
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { isActive } = request.only(['isActive'])
    if (isActive === '1') {
      config.isActive = false
    } else {
      config.isActive = true
    }
    await config.save()
    const allConfigs = await PlanterConfig.query().preload('user')
    const configDetail = allConfigs.find((planter) => planter.id === Number(params.id))
    return view.render('pages/admin/buildDetailPage', {
      configDetail: configDetail,
    })
  }

  async deletePrebuild({ response, params }: HttpContext) {
    const config = await PlanterConfig.findOrFail(params.id)
    await config.delete()
    return response.redirect().toRoute('admin.dashboard')
  }

  async newBuild({ view }: HttpContext) {
    return view.render('pages/admin/newBuildPage')
  }

  async createBuild({ request, response, auth, view }: HttpContext) {
    try {
      const config = new PlanterConfig()
      config.userId = auth.user?.$getAttribute('id')
      config.title = request.input('title')
      config.description = request.input('description')
      const configJson = JSON.parse(request.input('config'))
      config.json = configJson
      config.isActive = true
      await newBuildvalidator.validate(config)
      await config.save()
      return response.redirect().toRoute('admin.active')
    } catch (e) {
      console.log(e.message)
      // add the current data of config to the return response.redirect().back()
      return view.render('pages/admin/newBuildPage', {
        errors: e.message,
        title: request.input('title'),
        description: request.input('description'),
        configFile: request.input('config'),
      })
    }
  }

  async edit({ view, params }: HttpContext) {
    const config = await PlanterConfig.findOrFail(params.id)
    return view.render('pages/admin/newBuildPage', {
      title: config.title,
      description: config.description,
      configFile: config.json,
      update: true,
      id: config.id,
    })
  }

  async updateBuild({ request, params, view }: HttpContext) {
    try {
      const config = await PlanterConfig.findOrFail(params.id)
      // eslint-disable-next-line no-self-assign
      config.userId = config.userId
      config.title = request.input('title')
      config.description = request.input('description')
      const configJson = JSON.parse(request.input('config'))
      config.json = configJson
      config.isActive = true
      await newBuildvalidator.validate(config)
      await config.save()
      const allConfigs = await PlanterConfig.query().preload('user')
      const configDetail = allConfigs.find((planter) => planter.id === Number(params.id))
      return view.render('pages/admin/buildDetailPage', {
        configDetail: configDetail,
      })
    } catch (e) {
      console.log(e)
      // add the current data of config to the return response.redirect().back()
      return view.render('pages/admin/newBuildPage', {
        errors: e.message,
        update: true,
        title: request.input('title'),
        description: request.input('description'),
        configFile: request.input('config'),
      })
    }
  }

  async signOut({ response, auth }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().back()
  }

  async updateUser({ view, request, response, auth }: HttpContext) {
    const user = await User.findOrFail(auth.user?.id)
    const password = request.input('oldPassword')
    if (await hash.verify(user.password, password)) {
      if (request.input('newPassword') === null && request.input('confirmNewPassword') === null) {
        try {
          user.email = request.input('email')
          user.firstName = request.input('firstName')
          user.lastName = request.input('lastName')
          user.githubHandle = request.input('githubHandle')

          await updateUserValidator.validate(user)

          await user.save()

          return response.redirect().back()
        } catch (e) {
          console.log(e)
          return view.render('pages/admin/accountSettings', {
            errorMessage: e.messages[0].message,
            firstName: request.input('firstName'),
            lastName: request.input('lastName'),
            githubHandle: request.input('githubHandle'),
            email: request.input('email'),
          })
        }
      } else if (
        request.input('newPassword') !== null &&
        request.input('confirmNewPassword') !== null &&
        request.input('newPassword') === request.input('confirmNewPassword')
      ) {
        try {
          user.email = request.input('email')
          user.firstName = request.input('firstName')
          user.lastName = request.input('lastName')
          user.githubHandle = request.input('githubHandle')
          user.password = request.input('newPassword')

          await updateUserWithPasswordValidator.validate(user)

          await user.save()

          return response.redirect().back()
        } catch (e) {
          console.log(e)
          return view.render('pages/admin/accountSettings', {
            errorMessage: e.messages[0].message,
            firstName: request.input('firstName'),
            lastName: request.input('lastName'),
            githubHandle: request.input('githubHandle'),
            email: request.input('email'),
          })
        }
      } else if (request.input('newPassword') !== request.input('confirmNewPassword')) {
        return view.render('pages/admin/accountSettings', {
          errorMessage: 'Passwords do not match',
          firstName: request.input('firstName'),
          lastName: request.input('lastName'),
          githubHandle: request.input('githubHandle'),
          email: request.input('email'),
        })
      }
    } else {
      return view.render('pages/admin/accountSettings', {
        errorMessage: 'Password incorrect',
        firstName: request.input('firstName'),
        lastName: request.input('lastName'),
        githubHandle: request.input('githubHandle'),
        email: request.input('email'),
      })
    }
  }
}
