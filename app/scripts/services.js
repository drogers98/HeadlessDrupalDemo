angular.module('YouthworksMobil.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('EventService', function($http) {
  // Might use a resource here that returns a JSON array
 
    
    var events = [];
  

    $http.get('http://test-youth-works.gotpantheon.com/api/views/announcements.json').success(function(data) {
        // you can do some processing here
        var events = data;
       console.log(events);
       
    });

  return {
    all: function() {
      return events;
       
    },
    get: function(eventId) {
      // Simple index lookup
      return events[eventId];
    }
  }
});