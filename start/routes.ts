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
const AdminController = () => import('#controllers/admin_controller')
const LoginController = () => import('#controllers/login_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.on('/').render('pages/home').as('home')
/* Documentation pages */
router.get('/docs/introduction', [DocumentationsController, 'index']).as('docs.introduction')
router.get('/docs/installation', [DocumentationsController, 'installation']).as('docs.installation')
router.get('/docs/config', [DocumentationsController, 'customisation']).as('docs.customisation')
router.get('/docs/releases', [DocumentationsController, 'releases']).as('docs.releases')
router.get('/docs/packages', [DocumentationsController, 'packages']).as('docs.packages')

/* Community pages */
router.get('/community/prebuilds', [CommunitiesController, 'index']).as('community.prebuilds')
router
  .get('/community/prebuilds/:id', [CommunitiesController, 'show'])
  .as('community.prebuilds.show')

/* Admin & login pages */
router.get('/login', [LoginController, 'index']).as('login')
router.post('/login', [LoginController, 'post']).as('login.post')
router
  .get('/admin/dashboard', [AdminController, 'index'])
  .middleware(middleware.auth())
  .as('admin.dashboard')
router
  .get('/admin/active', [AdminController, 'active'])
  .middleware(middleware.auth())
  .as('admin.active')
router
  .get('/admin/archived', [AdminController, 'archived'])
  .middleware(middleware.auth())
  .as('admin.archived')
router
  .get('/admin/account', [AdminController, 'account'])
  .middleware(middleware.auth())
  .as('admin.account')
