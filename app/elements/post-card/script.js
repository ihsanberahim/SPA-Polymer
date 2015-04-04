(function () {
  Polymer({
    attached: function()
    {

    },
    openPost: function()
    {
      var config = {
        y: this.getBoundingClientRect().top,
        x: this.getBoundingClientRect().left,
        width: this.clientWidth,
        height: this.clientHeight,
      };

      var el = new PostModal();
      el.sLeft = config.x;
      el.sTop = config.y;
      el.sWidth = config.width;
      el.sHeight = config.height;
      xdPrepend(document.body, el);
    }
  });
})();