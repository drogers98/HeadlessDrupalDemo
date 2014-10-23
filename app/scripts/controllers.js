'use strict';
angular.module('EBSheadlessDrupal.controllers', [])





// Controller that pulls events list from our services.
.controller('EventIndexCtrl', function($scope, $stateParams, EventService) {
	$scope.setup;

	EventService.setups().then(function(setups){
		$scope.setups = setups.data;
		//console.log($scope.setups);
	});
})


// Controller that pulls events list from our services, and binds it to an individual view for display on the detail page.
.controller('EventDetailCtrl', function($scope, $stateParams, EventService) {
	$scope.setup;
	var id = $stateParams.id;

	EventService.setups().then(function(setups){
		EventService.setup(setups.data,id, function(setup){
			$scope.setup = setup;
			//console.log($scope.setup);
			});
		});
	})

// Controller that pulls single node JSON from our services, and binds to about.
	.controller('UserCtrl', function($scope, UserService) {
	$scope.user;
	UserService.user().then(function(user){
		$scope.user = user.data;
		//console.log($scope.about);
	});
})

// Controller that pulls single node JSON from our services, and binds to about.
	.controller('NodeCtrl', function($scope, NodeService) {
	$scope.node;

	NodeService.node().then(function(node){
		$scope.node = node.data;
		//console.log($scope.about);
	});
})

//user login 
.controller('AppCtrl', function() {
});