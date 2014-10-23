'use strict';
angular.module('EBSheadlessDrupal.services', [])

// Set the base of operations for the JSON calls. 
.factory('EBSheadlessDrupalAPI', function($http) {
	var proto = $http.get,
    	// Base path of the API we set up
        basePath = 'http://dev-headlessdrupal.pantheon.io/api/',
		callback = '?callback=JSON_CALLBACK';

	   return {
	     loadEndpoint: function(path) {
	       return proto(basePath+path+callback);
	     }
   };
 })

// Call A specific views JSON.
.factory('EventService', function(EBSheadlessDrupalAPI) {
  return {
    setups: function() {
      // Call the API, and define the specific endpoint
      return EBSheadlessDrupalAPI.loadEndpoint('views/setup.json');
    },
    setup: function(setups,id,callback){
      var findsetup = {};
      for(var i=0;i<setups.length;i++) {
        findsetup[setups[i].nid] = setups[i];
      }
      callback(findsetup[id]);
    }
  };
})


// Call A specific user by UID.
.factory('UserService', function(EBSheadlessDrupalAPI) {
  return {
    user: function() {
      // Call the API, and define the specific endpoint
      return EBSheadlessDrupalAPI.loadEndpoint('user/1.json');
    }
  };
})

// Call A specific node by UID.
.factory('NodeService', function(EBSheadlessDrupalAPI) {
  return {
    node: function() {
      // Call the API, and define the specific endpoint. In this case node 3 is the "About us" page.
      return EBSheadlessDrupalAPI.loadEndpoint('node/3.json');
    }
  };
})