(function () {
  Polymer({
    publish: {
      sTop: 0,
      sLeft: 0,
      sHeight: 0,
      sWidth: 0,
      screen_title: 'Post',
      ids: []
    },
    attached: function()
    {
      if(window.device && window.device.platform=='iOS')
      {
        this.$.toolbar.style.paddingTop = '8pt';
      }

      this.$.content.style.opacity = 0;

      this.show();
    },
    show: function(){
      this.style.zIndex = xdCount();
      TweenMax.to(this, 0.35, { top: 0, left: 0, height: '100%', width: '100%' });
      TweenMax.to(this.$.content, 0.35, { opacity: 1, delay: 0.35 });
    },
    close: function(){
      TweenMax.to(this.$.content, 0.25, { opacity: 0 });
      TweenMax.to(this, 0.35, { top: this.sTop, left: this.sLeft, height: this.sHeight, width: this.sWidth, delay: 0.35, onComplete: this.destroy.bind(this) });
    },
    destroy: function()
    {
      this.remove()
    },
    number: function(value){
        return parseFloat(value);
    },
  });
})();