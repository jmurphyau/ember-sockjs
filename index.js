/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sockjs',

  blueprintsPath: function blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  },

  included: function included(app) {
    this.app = app;

    this._super.included(app);

    app.import(app.bowerDirectory + '/ember-cli-sockjs-shim/app-shims.js', {
      exports: {
        sockjs: ['default']
      }
    });
  }
};
