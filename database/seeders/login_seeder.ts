import User from '#models/user'
import env from '#start/env'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.create({
      firstName: 'Full',
      lastName: 'Admin',
      email: env.get('ADMIN_EMAIL'),
      password: env.get('ADMIN_PASSWORD'),
      active: true,
    })
  }
}
