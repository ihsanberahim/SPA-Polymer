(function(document, app) {
  'use strict';

  // app.firebase_url = 'https://<firebase_domain>.firebaseio.com/';
  app.firebase_url = 'https://dev-eathalal.firebaseio.com/';

  app.check = new Object({
    polymer_ready: false,
    device_ready: false,
  });

  app.getFirebase = function()
  {
    return new Firebase(app.firebase_url);
  }

  app.ready = false;
  app.dummy = false;

  function waitAppReady(arg, arg1, changes, arg2)
  {
    if(app.ready==false && typeof app.onready === 'function' && app.check.polymer_ready==true)
    {
      if(
        (typeof cordova !== 'object' && app.check.device_ready==false) || 
        (typeof cordova === 'object' && app.check.device_ready==true))
      {
        app.onready();

        app.ready = true;

        console.log('app ... ready ', (typeof cordova), (typeof Polymer));
      }
    }
  }
  
  document.addEventListener('polymer-ready', function() {
    var observer = new ObjectObserver(app.check);
    observer.open(waitAppReady, app.check);

  	app.check.polymer_ready = true;
  });  
  document.addEventListener('deviceready', function() {
  	app.check.device_ready = true;
  });
})(
	wrap(document),
	xjApp('app'));