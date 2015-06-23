'use strict';

/**
 * @ngdoc function
 * @name blauesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blauesApp
 */
angular.module('blauesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
