import PlanterConfig from '#models/planter_config'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await PlanterConfig.createMany([
      {
        title: 'BEP',
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
      {
        title: 'Another one with a longer title for purposes',
        description:
          'For some reason this also has a really long desciption. If you wanted to let the user know more about your config, this is the spot to do so.',
        json: '{}',
        userId: 1,
      },
    ])
  }
}
