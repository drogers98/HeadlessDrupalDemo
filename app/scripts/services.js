'use strict';
angular.module('EBSheadlessDrupal.services', [])

// Set the base of operations for the JSON calls. 
.factory('EBSheadlessDrupalAPI', function($http) {
	var proto = $http.get,
    	// Base path of the API we set up
        basePath = 'http://test-youth-works.gotpantheon.com/api/',
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
    announcments: function() {
      // Call the API, and define the specific endpoint
      return EBSheadlessDrupalAPI.loadEndpoint('views/announcements.json');
    },
    announcment: function(announcments,id,callback){
      var findAnnouncment = {};
      for(var i=0;i<announcments.length;i++) {
        findAnnouncment[announcments[i].nid] = announcments[i];
      }
      callback(findAnnouncment[id]);
    }
  };
})


// Call A specific node by NID.
.factory('AboutService', function(EBSheadlessDrupalAPI) {
  return {
    about: function() {
      // Call the API, and define the specific endpoint
      return EBSheadlessDrupalAPI.loadEndpoint('node/1.json');
    }
  };
});