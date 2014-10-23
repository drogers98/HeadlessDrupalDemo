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
.controller('AppCtrl', function($scope, $ionicModal, $timeout, DrupalUserLogin) {
// Form data for the login modal
$scope.loginData = {};
$scope.doingLogin = false;
$scope.loginSuccess = false;
// Create the login modal that we will use later
$ionicModal.fromTemplateUrl('templates/login.html', {
scope: $scope
}).then(function(modal) {
$scope.modal = modal;
});
// Triggered in the login modal to close it
$scope.closeLogin = function() {
$scope.modal.hide();
},
// Open the login modal
$scope.login = function() {
$scope.modal.show();
};
// Perform the login action when the user submits the login form
$scope.doLogin = function() {
$scope.doingLogin = true;
var d_username = $scope.loginData.username;
var d_password = $scope.loginData.password;
$scope.userLoginData = {
"user" : d_username,
"pass" : d_password
};
console.log($scope.userLoginData);
DrupalUserLogin.doLogin( $scope.userLoginData ).then(
function(data){
console.log('funko');
$scope.doingLogin = false;
$scope.loginSuccess = true;
});
};
});
