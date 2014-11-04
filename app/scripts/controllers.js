'use strict';
angular.module('EBSheadlessDrupal.controllers', [])

// Controller that pulls events list from our services.
.controller('EventIndexCtrl', function($scope, EventService) {

	EventService.setups().then(function(setups){
		$scope.setups = setups.data;
		//console.log($scope.setups);
	});
})


// Controller that pulls events list from our services, and binds it to an individual view for display on the detail page.
.controller('EventDetailCtrl', function($scope, $stateParams, EventService) {

	var id = $stateParams.id;

	EventService.setups().then(function(setups){
		EventService.setup(setups.data,id, function(setup){
			$scope.setup = setup;
			//console.log($scope.setup);
			});
		});
	})

	// Controller that pulls events list from our services.
.controller('WhatIndexCtrl', function($scope, WhatService) {

	WhatService.whats().then(function(whats){
		$scope.whats = whats.data;
		//console.log($scope.whats);
	});
})


// Controller that pulls events list from our services, and binds it to an individual view for display on the detail page.
.controller('WhatDetailCtrl', function($scope, $stateParams, WhatService) {

	var id = $stateParams.id;

	WhatService.whats().then(function(whats){
		WhatService.what(whats.data,id, function(what){
			$scope.what = what;
			//console.log($scope.what);
			});
		});
	})

// Controller that pulls single node JSON from our services, and binds to about.
	.controller('UserCtrl', function($scope, UserService) {

	UserService.user().then(function(user){
		$scope.user = user.data;
		//console.log($scope.user);
	});
})

// Controller that pulls single node JSON from our services, and binds to about.
	.controller('NodeCtrl', function($scope, NodeService) {

	NodeService.node().then(function(node){
		$scope.node = node.data;
		//console.log($scope.node);
	}, function(err) {
		alert(err.status + ' ' + err.statusText);
	});
})

//user login
.controller('AppCtrl', function() {
});
