'use strict';

/**
 * @ngdoc overview
 * @name blauesApp
 * @description
 * # blauesApp
 *
 * Main module of the application.
 */
angular
  .module('blauesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sources', {
        templateUrl: 'views/sources.html',
        controller: 'SourcesCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
