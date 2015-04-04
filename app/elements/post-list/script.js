(function () {
  Polymer({
    publish: {
      entries: [],
      count: 0,
      type: '',
      ids: []
    },
    entriesChanged: function()
    {
    },
    attached: function()
    {
      switch(this.type)
      {
        case 'post':
          var scope = this;
          var el = new PostService();
          el.getPosts(function(entries)
          {
            scope.entries = entries;
          });
          xdPrepend(this, el);
        break;
        case 'food':
          var scope = this;
          var el = new FoodService();
          el.getObjects(function(entries)
          {
            scope.entries = entries;
          }, this.ids);
          xdPrepend(this, el);
        break;
        case 'restaurant':
          var scope = this;
          var el = new RestaurantService();
          el.getObjects(function(entries)
          {
            scope.entries = entries;
          });
          xdPrepend(this, el);
        break;
      }
    },
    detached: function()
    {
      this.fire('removeServices');
    },
    entriesChanged: function()
    {
      this.count = this.entries.length;
    }
  });
})();