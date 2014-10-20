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
      // Call the API, and define the specific endpoint
      return EBSheadlessDrupalAPI.loadEndpoint('node/1.json');
    }
  };
})

.factory('DrupalUserLogin', function($http, $q){
//Endpoints Variables

var loginEndpoint = 'http://test-youth-works.gotpantheon.com/api/user/login';
return{
/*
* Login against the Drupal Service
*/
doLogin : function( userdata ){
console.log(userdata);
var defer = $q.defer();
$http({
url : loginEndpoint,
dataType : 'json',
method : 'POST',
data : userdata,
headers : {
"Content-Type": "application/x-www-form-urlencoded"
}
}).
success(function(data, status, headers, config){
defer.resolve(data);
}).
error(function(data, status, headers, config){
defer.reject(data);
});
return defer.promise;
}
}
})