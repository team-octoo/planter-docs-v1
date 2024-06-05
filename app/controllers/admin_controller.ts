import PlanterConfig from '#models/planter_config'
import type { HttpContext } from '@adonisjs/core/http'

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
