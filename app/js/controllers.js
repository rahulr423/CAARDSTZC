'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
 $scope.difference = 0;
  
 
 $scope.buttonpress=false;
 $scope.getDiff = function() 
{
    
$scope.difference = Math.abs(parseFloat($scope.timezone2) - parseFloat($scope.timezone));
 $scope.buttonpress=true; }
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
