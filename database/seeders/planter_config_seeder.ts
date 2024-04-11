import PlanterConfig from '#models/planter_config'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await PlanterConfig.createMany([
      {
        title: 'BEP',
        description: 'BEM example',
        json: '{"version":6,"name":"demo","library":"react","installer":"yarn","hasTs":true,"layout":"sass-modules","prettier":false,"packages":["Error-boundary","React-router","Vitest","Zustand","i18next","React-Query"],"structure":"BEP (recommended)","mswPath":"src/mocks/endpoints","miragePath":"src/mocks/endpoints","hookPath":"src/utils/hooks","dataPath":"src/utils/data","funcsPath":"src/utils/funcs","assetImagesPath":"src/assets/images","assetFontsPath":"src/assets/fonts","assetMiscPath":"src/assets/misc","contextPath":"src/state/contexts","reduxActionPath":"src/state/actions","reduxStorePath":"src/state/store","reduxReducerPath":"src/state/reducers","zustandStoresPath":"src/state/stores","localesPath":"src/locales","typesPath":"src/types","components":{"basics":{"component":"src/components/basics/@pascalCase/@pascalCase.@ext","style":"src/components/basics/@pascalCase/@pascalCase.@ext","test":"src/components/basics/@pascalCase/tests/@pascalCase.@ext"},"elements":{"component":"src/components/elements/@pascalCase/@pascalCase.@ext","style":"src/components/elements/@pascalCase/@pascalCase.@ext","test":"src/components/elements/@pascalCase/tests/@pascalCase.@ext"},"pages":{"component":"src/components/pages/@pascalCase/@pascalCase.@ext","style":"src/components/pages/@pascalCase/@pascalCase.@ext","test":"src/components/pages/@pascalCase/tests/@pascalCase.@ext"}},"usePropTypes":false}',
        userId: 1,
      },
      {
        title: 'Atomic Design',
        description: 'Atomic Design example',
        json: '{"version":6,"name":"demo","library":"react","installer":"yarn","hasTs":true,"layout":"sass-modules","prettier":false,"packages":[],"structure":"Atomic","mswPath":"src/mocks/endpoints","miragePath":"src/mocks/endpoints","hookPath":"src/utils/hooks","dataPath":"src/utils/data","funcsPath":"src/utils/funcs","assetImagesPath":"src/assets/images","assetFontsPath":"src/assets/fonts","assetMiscPath":"src/assets/misc","contextPath":"src/state/contexts","reduxActionPath":"src/state/actions","reduxStorePath":"src/state/store","reduxReducerPath":"src/state/reducers","zustandStoresPath":"src/state/stores","localesPath":"src/locales","typesPath":"src/types","components":{"atoms":{"component":"src/components/atoms/@pascalCase/@pascalCase.@ext","style":"src/components/atoms/@pascalCase/@pascalCase.@ext","test":"src/components/atoms/@pascalCase/tests/@pascalCase.@ext"},"molecules":{"component":"src/components/molecules/@pascalCase/@pascalCase.@ext","style":"src/components/molecules/@pascalCase/@pascalCase.@ext","test":"src/components/molecules/@pascalCase/tests/@pascalCase.@ext"},"organisms":{"component":"src/components/organisms/@pascalCase/@pascalCase.@ext","style":"src/components/organisms/@pascalCase/@pascalCase.@ext","test":"src/components/organisms/@pascalCase/tests/@pascalCase.@ext"},"templates":{"component":"src/components/templates/@pascalCase/@pascalCase.@ext","style":"src/components/templates/@pascalCase/@pascalCase.@ext","test":"src/components/templates/@pascalCase/tests/@pascalCase.@ext"},"pages":{"component":"src/components/pages/@pascalCase/@pascalCase.@ext","style":"src/components/pages/@pascalCase/@pascalCase.@ext","test":"src/components/pages/@pascalCase/tests/@pascalCase.@ext"}},"usePropTypes":false}',
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
