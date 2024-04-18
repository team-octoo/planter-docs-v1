import PlanterConfig from '#models/planter_config'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import env from '#start/env'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    const adminUser = await User.findBy('email', env.get('ADMIN_EMAIL'))

    if (adminUser) {
      // Write your database queries inside the run method
      await PlanterConfig.createMany([
        {
          title: 'BEP',
          description:
            'The BEP structure is a recommended planter config for projects that use React or React-Native. BEP component structure stands for "Basics", "Elements" and "Pages".  \nIt is a triple layered component structure...\n\n- Basics: Your basic building blocks. These components do not have any business logic in them. They get their state through props.  \n- Elements: Elements are a collection of basic components and (sometimes) other elements. They can get their state through props or can have some business logic within the component itself.  \n- Pages: Pages are the largest components. These usually are a collection of elements. It is common that they contain business logic and pass data toward child components.  \n',
          json: '{"version":6,"name":"demo","library":"react","installer":"yarn","hasTs":true,"layout":"sass-modules","prettier":false,"packages":["Error-boundary","React-router","Vitest","Zustand","i18next","React-Query"],"structure":"BEP (recommended)","mswPath":"src/mocks/endpoints","miragePath":"src/mocks/endpoints","hookPath":"src/utils/hooks","dataPath":"src/utils/data","funcsPath":"src/utils/funcs","assetImagesPath":"src/assets/images","assetFontsPath":"src/assets/fonts","assetMiscPath":"src/assets/misc","contextPath":"src/state/contexts","reduxActionPath":"src/state/actions","reduxStorePath":"src/state/store","reduxReducerPath":"src/state/reducers","zustandStoresPath":"src/state/stores","localesPath":"src/locales","typesPath":"src/types","components":{"basics":{"component":"src/components/basics/@pascalCase/@pascalCase.@ext","style":"src/components/basics/@pascalCase/@pascalCase.@ext","test":"src/components/basics/@pascalCase/tests/@pascalCase.@ext"},"elements":{"component":"src/components/elements/@pascalCase/@pascalCase.@ext","style":"src/components/elements/@pascalCase/@pascalCase.@ext","test":"src/components/elements/@pascalCase/tests/@pascalCase.@ext"},"pages":{"component":"src/components/pages/@pascalCase/@pascalCase.@ext","style":"src/components/pages/@pascalCase/@pascalCase.@ext","test":"src/components/pages/@pascalCase/tests/@pascalCase.@ext"}},"usePropTypes":false}',
          userId: adminUser.id,
        },
        {
          title: 'Atomic Design',
          description:
            'The atomic design planter config follows the well-known atomic design principles. It is a good starting point for projects that follow this design pattern. It includes atoms, molecules, organisms, templates, and pages. It also includes a recommended folder structure for components, styles, and tests. It does not include any state management libraries. It is recommended to use a global state management with this config. More info on https://atomicdesign.bradfrost.com/',
          json: '{"version":6,"name":"demo","library":"react","installer":"yarn","hasTs":true,"layout":"sass-modules","prettier":false,"packages":[],"structure":"Atomic","mswPath":"src/mocks/endpoints","miragePath":"src/mocks/endpoints","hookPath":"src/utils/hooks","dataPath":"src/utils/data","funcsPath":"src/utils/funcs","assetImagesPath":"src/assets/images","assetFontsPath":"src/assets/fonts","assetMiscPath":"src/assets/misc","contextPath":"src/state/contexts","reduxActionPath":"src/state/actions","reduxStorePath":"src/state/store","reduxReducerPath":"src/state/reducers","zustandStoresPath":"src/state/stores","localesPath":"src/locales","typesPath":"src/types","components":{"atoms":{"component":"src/components/atoms/@pascalCase/@pascalCase.@ext","style":"src/components/atoms/@pascalCase/@pascalCase.@ext","test":"src/components/atoms/@pascalCase/tests/@pascalCase.@ext"},"molecules":{"component":"src/components/molecules/@pascalCase/@pascalCase.@ext","style":"src/components/molecules/@pascalCase/@pascalCase.@ext","test":"src/components/molecules/@pascalCase/tests/@pascalCase.@ext"},"organisms":{"component":"src/components/organisms/@pascalCase/@pascalCase.@ext","style":"src/components/organisms/@pascalCase/@pascalCase.@ext","test":"src/components/organisms/@pascalCase/tests/@pascalCase.@ext"},"templates":{"component":"src/components/templates/@pascalCase/@pascalCase.@ext","style":"src/components/templates/@pascalCase/@pascalCase.@ext","test":"src/components/templates/@pascalCase/tests/@pascalCase.@ext"},"pages":{"component":"src/components/pages/@pascalCase/@pascalCase.@ext","style":"src/components/pages/@pascalCase/@pascalCase.@ext","test":"src/components/pages/@pascalCase/tests/@pascalCase.@ext"}},"usePropTypes":false}',
          userId: adminUser.id,
        },
        {
          title: 'Another one with a longer title for purposes',
          description:
            'For some reason this also has a really long desciption. If you wanted to let the user know more about your config, this is the spot to do so.',
          json: '{"version":6,"name":"demo","library":"react","installer":"yarn","hasTs":true,"layout":"sass-modules","prettier":false,"packages":["Error-boundary","React-router","Vitest","Zustand","i18next","React-Query"],"structure":"Shared (recommended)","mswPath":"src/mocks/endpoints","miragePath":"src/mocks/endpoints","hookPath":"src/utils/hooks","dataPath":"src/utils/data","funcsPath":"src/utils/funcs","assetImagesPath":"src/assets/images","assetFontsPath":"src/assets/fonts","assetMiscPath":"src/assets/misc","contextPath":"src/state/contexts","zustandStoresPath":"src/state/stores","localesPath":"src/locales","typesPath":"src/types","components":{"shared":{"component":"src/components/shared/@pascalCase/@pascalCase.@ext","style":"src/components/shared/@pascalCase/@pascalCase.@ext","test":"src/components/shared/@pascalCase/tests/@pascalCase.@ext"},"pages":{"component":"src/components/pages/@pascalCase/@pascalCase.@ext","style":"src/components/pages/@pascalCase/@pascalCase.@ext","test":"src/components/pages/@pascalCase/tests/@pascalCase.@ext"}},"usePropTypes":false}',
          userId: adminUser.id,
        },
      ])
    }
  }
}
