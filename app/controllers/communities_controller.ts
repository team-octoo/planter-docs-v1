import PlanterConfig from '#models/planter_config'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommunitiesController {
  async index({ view }: HttpContext) {
    const allConfigs = await PlanterConfig.query().preload('user')

    return view.render('pages/prebuildsPage', {
      planterConfigs: allConfigs,
    })
  }

  async show({ view, params }: HttpContext) {
    const allConfigs = await PlanterConfig.query().preload('user')
    const configDetail = allConfigs.find((config) => config.id === Number(params.id))
    return view.render('pages/configDetailpage', {
      configDetail: configDetail,
    })
  }
}
