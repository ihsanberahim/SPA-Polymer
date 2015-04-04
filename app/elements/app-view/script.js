(function () {
  Polymer({
    publish: {
      selectedTab: 0,
      post_list_bottom: '40px',
      screen_title: '',
      requireDrawer: false,
      requireSearch: false
    },
    created: function()
    {
      
    },
    attached: function()
    {
      if(window.device && window.device.platform=='iOS')
      {
        this.$.main_toolbar.style.paddingTop = '8pt';
      }

      setTimeout(function()
      {
        try{
          var t = new Trianglify({
            x_gradient: Trianglify.colorbrewer.PuOr[9],
            noiseIntensity: 0,
            cellsize: 90
          });
          var pt = t.generate(500, 500);

          this.$.drawer_toolbar.style.backgroundImage = pt.dataUrl;
        }catch(e)
        {
          
        }

      }.bind(this), 1500);
      
      this.selectedTabChanged();
    },
    selectedTabChanged: function()
    {
      switch(this.selectedTab)
      {
        default:
          this.screen_title = 'Food';
        break;
        case 1:
          this.screen_title = 'Restaurant';
        break;
        case 2:
          this.screen_title = 'Coupon';
        break;
      }
    },
    openSearchModal: function(event, detail, sender)
    {
      var el = new SearchModalTransparent();
      el.screen_title = 'Search';
      xdPrepend(document.body, el);
    }
  });
})();