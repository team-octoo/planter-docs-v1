import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async index({ view }: HttpContext) {
    return view.render('pages/admin/login')
  }

  async post({ view, auth, response, request }: HttpContext) {
    try {
      /**
       * Step 1: Get credentials from the request body
       */
      const { email, password } = request.only(['email', 'password'])

      /**
       * Step 2: Verify credentials
       */
      const user = await User.verifyCredentials(email, password)

      /**
       * Step 3: Login user
       */
      await auth.use('web').login(user)

      /**
       * Step 4: Send them to a protected route
       */
      response.redirect('/admin/prebuilds')
    } catch (err) {
      return view.render('pages/admin/login', { loginError: true })
    }
  }
}
