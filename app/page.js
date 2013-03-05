define([
  'underscore',
  'backbone'
], function( _, Backbone ){

  return Backbone.View.extend({

    initialize: function( params  ){
      this.index  = params.index;
      this.app = params.app;

      this.id = this.el.id;

      this.route = this.$el.data('route') || this.id;

      this.bind( 'show', this.onShow, this );
      this.bind( 'hide', this.onHide, this );

      this.render();
    },

    onShow: function(){
      this.$el.addClass('ui-active');
      this.navigate();
      this.$el.prev().removeClass('ui-hidden');
      this.$el.next().removeClass('ui-hidden');
    },

    onHide: function(){
      console.time('onHide');
      this.$el.prop('className', 'ui-hidden');
      console.timeEnd('onHide');
    },

    render: function(){
      this.$el.css('z-index', 200 - this.index);
    },

    show: function( time, offset ){
      offset = offset || 0;

      var
        dfd = new $.Deferred(),
        current = $('.ui-active').index(),
        speed   = time || ( current === this.index ? 600 : 1000 * (this.index / 3) );

      $('html,body')
        .stop()
        .animate({ scrollTop: this.height + offset }, speed, function(){
          dfd.resolve();
        });

      return dfd.promise();
    },

    navigate: function(){

      if( $('html,body').is(':animated') === false ){
        this.app.router.navigate( this.route, false );
      }

      return this;
    }
  });

});

