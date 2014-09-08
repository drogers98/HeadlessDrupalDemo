'use strict';
angular.module('YouthworksMobil.controllers', [])



.controller('AppCtrl', function($scope) {

})

// A simple controller that fetches a list of data from a service
.controller('EventIndexCtrl', function($scope, EventService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.events = EventService.all();
})


// A simple controller that shows a tapped item's data
.controller('EventDetailCtrl', function($scope, $stateParams, EventService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.event = EventService.get($stateParams.eventId);
});
