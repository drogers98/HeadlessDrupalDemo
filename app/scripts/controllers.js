'use strict';
angular.module('YouthworksMobil.controllers', [])

.controller('AppCtrl', function() {

})


// Controller that pulls events list from our services.
.controller('EventIndexCtrl', function($scope, $stateParams, EventService) {
	$scope.announcment;

	EventService.announcments().then(function(announcments){
		$scope.announcments = announcments.data;
		//console.log($scope.announcments);
	});
})


// Controller that pulls events list from our services, and binds it to an individual view for display on the detail page.
.controller('EventDetailCtrl', function($scope, $stateParams, EventService) {
	$scope.announcment;
	var id = $stateParams.id;

	EventService.announcments().then(function(announcments){
		EventService.announcment(announcments.data,id, function(announcment){
			$scope.announcment = announcment;
			//console.log($scope.announcment);
			});
		});
	})

// Controller that pulls single node JSON from our services, and binds to about.
	.controller('AboutCtrl', function($scope, AboutService) {
	$scope.about;

	AboutService.about().then(function(about){
		$scope.about = about.data;
		//console.log($scope.about);
	});
});
