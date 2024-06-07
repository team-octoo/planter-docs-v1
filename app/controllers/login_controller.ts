import User from '#models/user'
import { registerValidator, userValidator } from '#validators/register'
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
       * Step 4: Send them to a protected routeŒ
       */
      response.redirect('/admin/dashboard')
    } catch (err) {
      return view.render('pages/admin/login', { loginError: true })
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    response.redirect('/login')
  }

  async register({ view }: HttpContext) {
    return view.render('pages/admin/register')
  }

  async showPassword({ view, request }: HttpContext) {
    try {
      const user = new User()
      user.email = request.input('email')
      user.firstName = request.input('firstName')
      user.lastName = request.input('lastName')
      user.githubHandle = request.input('githubHandle')
      await userValidator.validate(user)
      return view.render('pages/admin/password', {
        firstName: user.firstName,
        lastName: user.lastName,
        githubHandle: user.githubHandle,
        email: user.email,
      })
    } catch (err) {
      return view.render('pages/admin/register', {
        firstName: request.input('firstName'),
        lastName: request.input('lastName'),
        githubHandle: request.input('githubHandle'),
        email: request.input('email'),
        error: true,
      })
    }
  }

  async registerPost({ auth, response, request }: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    const user = await User.create(data)

    await auth.use('web').login(user)

    return response.redirect('/admin/dashboard')
  }
}
