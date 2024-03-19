/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const DocumentationsController = () => import('#controllers/documentations_controller')
const CommunitiesController = () => import('#controllers/communities_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
/* Documentation pages */
router.get('/docs/introduction', [DocumentationsController, 'index']).as('docs.introduction')
router.get('/docs/installation', [DocumentationsController, 'installation']).as('docs.installation')
router.get('/docs/releases', [DocumentationsController, 'releases']).as('docs.releases')
router.get('/docs/packages', [DocumentationsController, 'packages']).as('docs.packages')

/* Community pages */
router.get('/community/prebuilds', [CommunitiesController, 'index'])
