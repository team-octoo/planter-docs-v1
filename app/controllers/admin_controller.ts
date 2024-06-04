import PlanterConfig from '#models/planter_config'
import type { HttpContext } from '@adonisjs/core/http'

export default class AdminController {
  async index({ view, auth }: HttpContext) {
    const id = auth.user?.$getAttribute('id')
    const firstName = auth.user?.$getAttribute('firstName')
    const allConfigs = await PlanterConfig.query().preload('user').where('user_id', id)
    const recentConfigs = await PlanterConfig.query().where('user_id', id).limit(3)
    return view.render('pages/admin/dashboard', {
      planterConfigs: allConfigs,
      id: id,
      firstName: firstName,
      recentConfigs: recentConfigs,
    })
  }

  async active({ view, auth }: HttpContext) {
    const id = auth.user?.$getAttribute('id')
    const allConfigs = await PlanterConfig.query().preload('user').where('user_id', id)
    return view.render('pages/admin/activeBuilds', {
      planterConfigs: allConfigs,
      id: id,
    })
  }

  async archived({ view, auth }: HttpContext) {
    const id = auth.user?.$getAttribute('id')
    return view.render('pages/admin/archivedBuilds', {
      id: id,
    })
  }

  async account({ view, auth }: HttpContext) {
    const firstName = auth.user?.$getAttribute('firstName')
    const lastName = auth.user?.$getAttribute('lastName')
    const email = auth.user?.$getAttribute('email')
    return view.render('pages/admin/accountSettings', {
      firstName: firstName,
      lastName: lastName,
      email: email,
    })
  }
}
