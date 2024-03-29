import type { HttpContext } from '@adonisjs/core/http'
import { introPageContent } from '../../resources/data/content/introduction_page.js'

export default class DocumentationsController {
  async index({ view }: HttpContext) {
    return view.render('pages/introPage', {
      pageContent: introPageContent.content,
    })
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
