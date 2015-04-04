(function () {
  Polymer({
    attached: function()
    {
    },
    pictureLoadingChanged: function(now, prev, obj)
    {
      var picture_wrapper = this.$.content.querySelector('.picture');
      var core_image = this.$.content.querySelector('core-image');

      if(now==true)
      {
        var el = obj[2][0];

        core_image.setAttribute('width', picture_wrapper.clientWidth+'px');
      }
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