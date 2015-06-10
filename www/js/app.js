// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('App', ['ionic'])
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('start', {
        url: '/start',
        templateUrl: 'views/start/start.html'
      })
    .state('people', {
      url: '/people',
      controller: 'PeopleController',
      templateUrl: 'views/people/people.html'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html'
    })
    .state('cats', {
      url: '/cats',
      controller: 'CatController',
      templateUrl: 'views/cats/cats.html'
    })
    .state('famous', {
      url: '/famous',
      controller: 'FamousController',
      templateUrl: 'views/famous/famous.html'
    })
    ;

  $urlRouterProvider.otherwise('/start');

})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
