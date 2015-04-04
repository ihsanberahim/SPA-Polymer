(function (app) {
  Polymer({
    publish: {
      dummy: false,
      url_dummy: 'restaurants.json',
      object_name: 'restaurant',
      object_plural: 'restaurants',
    },
    created: function()
    {
      this.dummy = app.dummy;
    },
    attached: function()
    {
      
    },
    newObject: function()
    {
      return new Object({
        created: null,
        title: null,
        id: null,
        logo: null,
        picture: null,
        long: null,
        lat: null,
        foods_count: null
      });
    },
    postObject: function(objectMeta, callback)
    {
      var id = now = objectMeta.id || (new Date()).getTime();
      var fireObject = app.getFirebase().child(this.object_plural).child(id);

      if(!callback)
      {
        callback = function(error){}
      }

      try{
        fireObject.set(Polymer.mixin(this.newObject(), objectMeta), callback);
      }catch(e)
      {
        callback(e);
      }
    },
    getObjects: function(callback)
    {
      if(this.dummy)
      {
        this.$.dummy.url = this.resolvePath(this.url_dummy);
        this.$.dummy.addEventListener('core-response', function(e)
        {
          var result  = e.detail.response;
          var entries = [];
          var scope = this;

          xjEach(result, function(entry, index)
          {
            entry.id = index;
            entries.push(entry);

            scope.postObject(entry);
          });

          callback(entries);
        }.bind(this));

        this.$.dummy.go();
      }else
      {
        var fireObject = app.getFirebase().child(this.object_plural);
        var query = fireObject.limitToLast(30);

        query.once('value',function(snapshot)
        {
          var result = snapshot.val();
          var entries = [];

          xjEach(result, function(entry, index)
          {
            entry.id = index;
            entries.push(entry);
          });

          callback(entries);
        })
      }
    }
  });
})(
  xjApp('app')
  );