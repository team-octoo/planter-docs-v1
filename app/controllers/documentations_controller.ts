import type { HttpContext } from '@adonisjs/core/http'

export default class DocumentationsController {
  async index({ view }: HttpContext) {
    return view.render('pages/introPage')
  }

  async installation({ view }: HttpContext) {
    return view.render('pages/installationPage')
  }

  async releases({ view }: HttpContext) {
    return view.render('pages/releasesPage')
  }

  async packages({ view }: HttpContext) {
    return view.render('pages/packagesPage')
  }
}
