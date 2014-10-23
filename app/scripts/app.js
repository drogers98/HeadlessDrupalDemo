'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules
// the 2nd parameter is an array of 'requires.' In this case ionic, our controllers, and our services
angular.module('EBSheadlessDrupal', ['ionic', 'EBSheadlessDrupal.controllers', 'EBSheadlessDrupal.services'])

// Some things relatedb specific to native (cordova) build, if doing so.
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard, for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// Configure the routes for navigating the application
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // Notice that the "controller" is specified for the states that need a specific one. This saves us from having to specify it in the template later.
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

        .state('app.home', {
      url: '/home',
      views: {
        'menuContent' :{
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('app.steps', {
      url: '/steps',
      views: {
        'menuContent': {
          templateUrl: 'templates/steps.html',
          controller: 'EventIndexCtrl'
        }
      }
    })

    .state('app.step', {
      url: '/step/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/step.html',
          controller: 'EventDetailCtrl'
        }
      }
    })

    .state('app.user', {
      url: '/user',
      views: {
        'menuContent' :{
          templateUrl: 'templates/user.html',
          controller: 'UserCtrl'
        }
      }
    })

    .state('app.node', {
      url: '/node',
      views: {
        'menuContent' :{
          templateUrl: 'templates/node.html',
          controller: 'NodeCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
