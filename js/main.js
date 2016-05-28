window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    var appList = document.getElementById("app-list");
    connection = new WebSocket("ws://localhost:9999");
    
    appList.onclick = function(event) {
    	  var target = event.target;

    	  if (target.tagName != 'LI') {
    		  return;
    	  } 

    	  connection.send(target.dataset.app);
    	};
};