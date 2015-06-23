'use strict';

angular.module('blauesapp')
  .controller('MainCtrl', function ($scope) {
    $scope.topics = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTopic = function () {
  	$scope.topics.push($scope.topic);
  	$scope.topic = '';
	};
	$scope.removeTopic = function (index) {
      $scope.topics.splice(index, 1);
    };
  });
