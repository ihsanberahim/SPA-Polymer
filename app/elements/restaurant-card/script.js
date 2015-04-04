(function () {
  Polymer({
    publish: {
      entry: {
        created: null,
        title: null,
        id: null,
        logo: null,
        picture: null,
        long: null,
        lat: null,
        foods_count: null,
        food_ids: []
      }
    },
    attached: function()
    {

    },
    openRestaurantModal: function()
    {
      var config = {
        y: this.getBoundingClientRect().top,
        x: this.getBoundingClientRect().left,
        width: this.clientWidth,
        height: this.clientHeight,
      };

      var el = new RestaurantModal();
      el.sLeft = config.x;
      el.sTop = config.y;
      el.sWidth = config.width;
      el.sHeight = config.height;
      el.screen_title = this.entry.title;
      el.ids = this.entry.food_ids;
      xdPrepend(document.body, el);
      
/*
      var el = new PostModal();
      el.sLeft = config.x;
      el.sTop = config.y;
      el.sWidth = config.width;
      el.sHeight = config.height;
      xdPrepend(document.body, el);
*/
    }
  });
})();