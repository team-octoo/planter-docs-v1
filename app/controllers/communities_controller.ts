import type { HttpContext } from '@adonisjs/core/http'

export default class CommunitiesController {
  async index({ view }: HttpContext) {
    return view.render('pages/prebuildsPage')
  }
}
