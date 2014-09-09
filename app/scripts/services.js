angular.module('YouthworksMobil.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('YouthWorksAPI', function($http) {
   var proto = $http.get,
        path = 'http://test-youth-works.gotpantheon.com/api/views/announcements.json',
    callback = '?callback=JSON_CALLBACK';


   return {
     loadEndpoint: function() {
       return proto(path+callback);
     }
   }
 })

.factory('EventService', function(YouthWorksAPI) {
  return {
    announcments: function() {
      return YouthWorksAPI.loadEndpoint();
    },
    announcment: function(announcments,id,callback){
      var findAnnouncment = {};
      for(var i=0;i<announcments.length;i++) {
        findAnnouncment[announcments[i].nid] = announcments[i];
      }
      callback(findAnnouncment[id]);
    }
  }
});
