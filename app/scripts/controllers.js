'use strict';
angular.module('YouthworksMobil.controllers', [])



.controller('AppCtrl', function($scope) {

})

.controller('EventIndexCtrl', function($scope, $stateParams, EventService) {
	$scope.announcment;

	EventService.announcments().then(function(announcments){
		$scope.announcments = announcments.data;
		console.log($scope.announcments);
	})
})


// A simple controller that shows a tapped item's data
.controller('EventDetailCtrl', function($scope, $stateParams, EventService) {
	$scope.announcment;
	var id = $stateParams.id;

	EventService.announcments().then(function(announcments){
		EventService.announcment(announcments.data,id, function(announcment){
			$scope.announcment = announcment;
			})
		})
	})
	
	.controller('AboutCtrl', function($scope, AboutService) {
	$scope.about;

	AboutService.about().then(function(about){
		$scope.about = about.data;
		console.log($scope.about);
	})
});
