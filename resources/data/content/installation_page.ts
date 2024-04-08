export const installationPageContent = {
  content:
    '<p>Follow these simple steps to install Planter CLI and start building your React and React-native applications with ease.</p><ol><li>Open your terminal.</li><li>Run the following command to install Planter CLI globally:</li><code>npm install -g @team-octoo/planter</code><li>After installation, you can run <code>planter -h</code> to see the available commands.</li></ol><p>For more information, visit the <a href="(https://github.com/team-octoo/planter-cli)">official Planter CLI repository</a> on GitHub.</p><h2 id="usage">Usage</h2>' +
    `<pre>
    Options:
      -V, --version                                  output the version number
      -h, --help                                     display help for command
    
    Commands:
      init [options]                                 Initialise the CLI to create a new project with opinionated structure.
      install                                        Install everything according to the planter config file.
      plant:context <string>                         Makes a React context file
      plant:hook <string>                            Makes a custom React hook
      plant:data <string>                            Makes a data file for exporting a value constant
      plant:function <string>                        Makes a function file to export a shared function
      plant:component [options] <name> [foldername]  Makes a component according to the chosen structure
      plant:folder <name>                            Create a new component folder to use in the plant:component command (use / to have subfolders)
      plant:reducer <string>                         Makes a reducer and action (Redux only)
      plant:store <string>                           Makes a store (Zustand only)
      plant:mock <string>                            Makes a mock service worker file
      setup:CI/CD <git provider>                           Sets up a CI/CD file for a chosen GitRepo
      plant:form <string>                            Sets up a new form using React Hook Form
      plant:dataModel [options] [name]       Creates a data model with hooks for fetching data, types when using typescript and zustand or redux stores when those packages are selected
      help [command]                         display help for command
    </pre>
    `,
}
