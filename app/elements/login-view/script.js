Polymer({
  publish: {
    screen_title: '',
  },
  created: function()
  {
  },
  attached: function()
  {
    this.style.opacity = 0;
    this.$.content.style.top = this.clientHeight;
    this.style.zIndex = xdCount();

    this.show();
  },
  hide: function()
  {
    TweenMax.to(this.$.content, 0.35, { top: this.clientHeight });
    TweenMax.to(this, 0.5, { opacity: 0, delay: 0.25, onComplete: this.destroy.bind(this) });          
  },
  show: function()
  {
    TweenMax.set(this, { opacity: 0 })
    TweenMax.to(this, 0.5, { opacity: 1 });

    TweenMax.set(this.$.content, { top: this.clientHeight })
    TweenMax.to(this.$.content, 0.35, { top: 0, delay: 0.25 });
  },
  destroy: function()
  {
    this.remove();
  },
  more: function()
  {
    var el = new LoginView();
    el.screen_title='Sample Nested Modal';
    xdPrepend(document.body, el);
  }
});