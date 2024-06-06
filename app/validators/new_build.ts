import vine from '@vinejs/vine'

export const newBuildvalidator = vine.compile(
  vine.object({
    title: vine.string(),
    description: vine.string(),
    json: vine.object({
      version: vine.number(),
      name: vine.string(),
      library: vine.string(),
      installer: vine.string(),
      hasTs: vine.boolean(),
      layout: vine.string(),
      prettier: vine.boolean(),
      packages: vine.array(vine.string()),
      structure: vine.string(),
      mswPath: vine.string(),
      miragePath: vine.string(),
      hookPath: vine.string(),
      dataPath: vine.string(),
      funcsPath: vine.string(),
      assetImagesPath: vine.string(),
      assetFontsPath: vine.string(),
      assetMiscPath: vine.string(),
      contextPath: vine.string(),
      reduxActionPath: vine.string(),
      reduxStorePath: vine.string(),
      reduxReducerPath: vine.string(),
      zustandStoresPath: vine.string(),
      localesPath: vine.string(),
      typesPath: vine.string(),
      components: vine.object({}),
      usePropTypes: vine.boolean(),
    }),
    isActive: vine.boolean(),
    userId: vine.number(),
  })
)
