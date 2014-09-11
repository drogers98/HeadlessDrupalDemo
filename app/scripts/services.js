'use strict';
angular.module('YouthworksMobil.services', [])

// Set the base of operations for the JSON calls. 
.factory('YouthWorksAPI', function($http) {
	var proto = $http.get,
    	// Base path of the API
        basePath = 'http://test-youth-works.gotpantheon.com/api/',
		callback = '?callback=JSON_CALLBACK';

	   return {
	     loadEndpoint: function(path) {
	       return proto(basePath+path+callback);
	     }
   };
 })

.factory('EventService', function(YouthWorksAPI) {
  return {
    announcments: function() {
      // Call the API, and define the specific endpoint
      return YouthWorksAPI.loadEndpoint('views/announcements.json');
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


// Call A specific node. Hook up for about page.
.factory('AboutService', function(YouthWorksAPI) {
  return {
    about: function() {
      // Call the API, and define the specific endpoint
      return YouthWorksAPI.loadEndpoint('node/1.json');
    }
  };
});