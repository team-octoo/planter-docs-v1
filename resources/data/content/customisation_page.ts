export const customisationPageContent = {
  content:
    '<p>A common planter config file:</p>' +
    `<pre><code>
    {
      <span class="hljs-attr">"version"</span>: <span class="hljs-number">6</span>,
      <span class="hljs-attr">"name"</span>: <span class="hljs-string">"yourproject"</span>,
      <span class="hljs-attr">"library"</span>: <span class="hljs-string">"react"</span>,
      <span class="hljs-attr">"installer"</span>: <span class="hljs-string">"yarn"</span>,
      <span class="hljs-attr">"hasTs"</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">"layout"</span>: <span class="hljs-string">"sass-modules"</span>,
      <span class="hljs-attr">"prettier"</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">"packages"</span>: [
        <span class="hljs-string">"Error-boundary"</span>,
        <span class="hljs-string">"Vitest"</span>,
        <span class="hljs-string">"Mock-service-worker"</span>,
        <span class="hljs-string">"React-router"</span>,
        <span class="hljs-string">"Zustand"</span>
      ],
      <span class="hljs-attr">"structure"</span>: <span class="hljs-string">"BEP (recommended)"</span>,
      <span class="hljs-attr">"mswPath"</span>: <span class="hljs-string">"src/mocks/endpoints"</span>,
      <span class="hljs-attr">"miragePath"</span>: <span class="hljs-string">"src/mocks/endpoints"</span>,
      <span class="hljs-attr">"hookPath"</span>: <span class="hljs-string">"src/utils/hooks"</span>,
      <span class="hljs-attr">"dataPath"</span>: <span class="hljs-string">"src/utils/data"</span>,
      <span class="hljs-attr">"funcsPath"</span>: <span class="hljs-string">"src/utils/funcs"</span>,
      <span class="hljs-attr">"assetImagesPath"</span>: <span class="hljs-string">"src/assets/images"</span>,
      <span class="hljs-attr">"assetFontsPath"</span>: <span class="hljs-string">"src/assets/fonts"</span>,
      <span class="hljs-attr">"assetMiscPath"</span>: <span class="hljs-string">"src/assets/misc"</span>,
      <span class="hljs-attr">"contextPath"</span>: <span class="hljs-string">"src/state/contexts"</span>,
      <span class="hljs-attr">"reduxActionPath"</span>: <span class="hljs-string">"src/state/actions"</span>,
      <span class="hljs-attr">"reduxStorePath"</span>: <span class="hljs-string">"src/state/store"</span>,
      <span class="hljs-attr">"reduxReducerPath"</span>: <span class="hljs-string">"src/state/reducers"</span>,
      <span class="hljs-attr">"zustandStoresPath"</span>: <span class="hljs-string">"src/state/stores"</span>,
      <span class="hljs-attr">"localesPath"</span>: <span class="hljs-string">"src/locales"</span>,
      <span class="hljs-attr">"typesPath"</span>: <span class="hljs-string">"src/types"</span>,
      <span class="hljs-attr">"components"</span>: {
        <span class="hljs-attr">"basics"</span>: {
          <span class="hljs-attr">"component"</span>: <span class="hljs-string">"src/components/basics/@pascalCase/@pascalCase.@ext"</span>,
          <span class="hljs-attr">"style"</span>: <span class="hljs-string">"src/components/basics/@pascalCase/@pascalCase.@ext"</span>,
          <span class="hljs-attr">"test"</span>: <span class="hljs-string">"src/components/basics/@pascalCase/tests/@pascalCase.test.@ext"</span>
        },
        <span class="hljs-attr">"elements"</span>: {
          <span class="hljs-attr">"component"</span>: <span class="hljs-string">"src/components/elements/@pascalCase/@pascalCase.@ext"</span>,
          <span class="hljs-attr">"style"</span>: <span class="hljs-string">"src/components/elements/@pascalCase/@pascalCase.@ext"</span>,
          <span class="hljs-attr">"test"</span>: <span class="hljs-string">"src/components/elements/@pascalCase/tests/@pascalCase.test.@ext"</span>
        },
        <span class="hljs-attr">"pages"</span>: {
          <span class="hljs-attr">"component"</span>: <span class="hljs-string">"src/components/pages/@pascalCase/@pascalCase.@ext"</span>,
          <span class="hljs-attr">"style"</span>: <span class="hljs-string">"src/components/pages/@pascalCase/@pascalCase.@ext"</span>,
          <span class="hljs-attr">"test"</span>: <span class="hljs-string">"src/components/pages/@pascalCase/tests/@pascalCase.test.@ext"</span>
        }
      },
      <span class="hljs-attr">"usePropTypes"</span>: <span class="hljs-literal">false</span>
    }
    </code></pre><br/>` +
    '<h2 id="parts">Paths & packages</h2><To>Everything with the "Path" suffix can be customised and also the packages.<br/>To customise the packages, use the names listed beneath the packages page.</p>' +
    '<h2 id="replacers">String replacers</h2>' +
    '<p>All paths start from the root of the project. There are some <strong>string replacers</strong> which can be used to further customise your planter experience.</p>' +
    '<p><strong>@camelCase</strong>: Replaces the given parameter in camelcase<br/><strong>@pascalCase</strong>: Replaces the given parameter in pascalcase<br/><strong>@ext</strong>: Is replaced with the appropriate file extension</p>' +
    '<h2 id="others">How do others use</h2>' +
    '<p>In the community page, there is a list of pre-built config files by the community. Take one for a spin and see if you like it.</p>' +
    '<h2 id="share">Sharing your config</h2>' +
    '<p>Do you have the ultimate configuration? Share it with the community through this website.</p>',
}
