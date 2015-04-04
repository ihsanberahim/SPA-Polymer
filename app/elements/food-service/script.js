(function (app) {
  Polymer({
    publish: {
      dummy: false,
      url_dummy: 'foods.json',
      object_name: 'food',
      object_plural: 'foods',
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
        description: null,
        id: null,
        picture: null,
        place_id: null,
        place_title: null,
        title: null,
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
    getObjects: function(callback, ids)
    {
      console.log('food-service','getObjects', ids);

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
            if((ids.length>0 && in_array(entry.id, ids)) || ids.length==0)
            {
              entries.push(entry);
            }

            // scope.postObject(entry);
          });

          callback(entries);
        }.bind(this));

        this.$.dummy.go();
      }else
      {
        var fireObject, query;

        if(ids && ids.length>0)
        {
          var entries = [];

          ids.forEach(function(id, index)
          {
            console.log('getObject.forEach', id, index);

            // fireObject = app.getFirebase().child(this.object_plural).child(id);
            fireObject = app.getFirebase().child([this.object_plural,id].join('/'));
            fireObject.on('value', function(snapshot)
            {
              var result = snapshot.val();

              entries.push(result);

              callback(entries);
            })
          }.bind(this));

        }else
        {
          fireObject = app.getFirebase().child(this.object_plural);
          query = fireObject.limitToLast(30);
          query.once('value', function(snapshot)
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
    }
  });
})(
  xjApp('app')
  );