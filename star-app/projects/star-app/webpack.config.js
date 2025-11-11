const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'star-app',

  exposes: {
    './StarReportModule': './projects/star-app/src/app/star-report/star-report.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    '@NickStitely/my-lib': {
      singleton: true,
      strictVersion: false,
      requiredVersion: ">=1.0.0 <=2.0.0"
    }
  },

});
