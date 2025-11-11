const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'grants-folder-app',

  exposes: {
    './GrantsModule': './projects/grants-folder-app/src/app/grants/grants.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),


    // Expect failure.
    // Unsatisfied version 2.0.0 from pams-layout-app of shared singleton module @NickStitely/my-lib (required >=1.0.0 <2.0.0)
    // Reason: It wants a singleton my-lib but because 2.0.0 is provided by host and not < 2.0.0 like this requires. My Grants Folder app fails
    // Everything else will continue to load fine
    
    /*'@NickStitely/my-lib': {
      singleton: true,
      strictVersion: true,
      requiredVersion: ">=1.0.0 <2.0.0"
    },*/

    // Expect success
    // Loads library from grants-folder bundle
    // Loads the version imported by grants-folder bundle
    // Host/STAR still share same singleton, grants-folder does not
    /*'@NickStitely/my-lib': {
      singleton: false,
      strictVersion: true,
      requiredVersion: ">=1.0.0 <2.0.0"
    },*/

    // Expect: Success with 2.0.0 being loaded as singleton
    // Without strict version being true, it will load any version that already exists
    /*'@NickStitely/my-lib': {
      singleton: true,
      strictVersion: false,
      requiredVersion: ">=1.0.0 <2.0.0"
    },*/

    // Expect: success, loads 1.0.0 but it wont' be singleton
    '@NickStitely/my-lib': {
      singleton: false,
      strictVersion: true,
      requiredVersion: "1.0.0",

    }
  },

});
