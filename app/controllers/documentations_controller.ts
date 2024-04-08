import type { HttpContext } from '@adonisjs/core/http'
import { introPageContent } from '../../resources/data/content/introduction_page.js'
import { installationPageContent } from '../../resources/data/content/installation_page.js'
import { customisationPageContent } from '../../resources/data/content/customisation_page.js'
import { releasePageContent } from '../../resources/data/content/releases_page.js'
import { packagesPageContent } from '../../resources/data/content/packages_page.js'

export default class DocumentationsController {
  async index({ view }: HttpContext) {
    return view.render('pages/introPage', {
      pageContent: introPageContent.content,
    })
  }

  async installation({ view }: HttpContext) {
    return view.render('pages/installationPage', {
      pageContent: installationPageContent.content,
    })
  }

  async customisation({ view }: HttpContext) {
    return view.render('pages/customisationPage', {
      pageContent: customisationPageContent.content,
    })
  }

  async releases({ view }: HttpContext) {
    return view.render('pages/releasesPage', {
      pageContent: releasePageContent.content,
    })
  }

  async packages({ view }: HttpContext) {
    return view.render('pages/packagesPage', {
      pageContent: packagesPageContent.content,
    })
  }
}
