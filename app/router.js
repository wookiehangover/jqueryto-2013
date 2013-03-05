define(function(require, exports, module){

  var _ = require('underscore');
  var Backbone = require('backbone');

  var Router = Backbone.Router.extend({

    initialize: function(params){
      if( !params.app ){
        throw new Error('Requires an app object');
      }
      this.app = params.app;
    },

    routes: {
      ":page": "page"
    },

    page: function( id ){
      if( !id ) return;

      try {
        this.app.getPage( id ).show();
      } catch (error) {
        throw new Error('404 Not Found!');
      }
    }
  });

  module.exports = Router;

});
