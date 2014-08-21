'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
 $scope.difference = 0;
  
  $scope.getDiff = function() {
    $scope.difference = Math.abs(parseInt($scope.timezone2) - parseInt($scope.timezone));
  }
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
