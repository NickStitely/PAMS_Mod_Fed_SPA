const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    '@NickStitely/my-lib': {
      singleton: true,
      strictVersion: false,
      requiredVersion: ">=1.0.0 <=2.0.0",
      pinned: true // set this to true if you want the host to automatically include this library in bundle even if host will not use. This is what we want.
    }
  },

});
