'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('YouthworksMobil', ['ionic', 'config', 'YouthworksMobil.controllers', 'YouthworksMobil.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

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

    .state('app.routes', {
      url: '/routes',
      views: {
        'menuContent' :{
          templateUrl: 'templates/routes.html'
        }
      }
    })
    
        // the pet tab has its own child nav-view and history
    .state('app.announcements', {
      url: '/announcements',
      views: {
        'menuContent': {
          templateUrl: 'templates/announcements.html',
          controller: 'EventIndexCtrl'
        }
      }
    })

    .state('app.announcementDetail', {
      url: '/announcement/:eventId',
      views: {
        'menuContent': {
          templateUrl: 'templates/announcementDetail.html',
          controller: 'EventDetailCtrl'
        }
      }
    })
    
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent' :{
          templateUrl: 'templates/about.html'
        }
      }
    })
    
    .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent' :{
          templateUrl: 'templates/contact.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

