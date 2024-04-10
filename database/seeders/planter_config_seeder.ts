import PlanterConfig from '#models/planter_config'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await PlanterConfig.createMany([
      {
        title: 'BEM',
        description: 'BEM example',
        json: '{}',
        userId: 1,
      },
      {
        title: 'Atomic Design',
        description: 'Atomic Design example',
        json: '{}',
        userId: 1,
      },
    ])
  }
}
