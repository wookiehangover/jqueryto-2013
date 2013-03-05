require([
  'backbone',
  'layout'
], function( Backbone, Layout ){

  $(function(){
    window.Deck = new Layout();

    Backbone.history.start({ pushState: true });
  });

});

