/// <reference path="angular.js" />

angular
.module('myModule', [])
.controller("myController", ($scope)=>{
    $scope.x1 = 'Sanju'
    $scope.x2 = angular.uppercase($scope.x1)
    $scope.x3 = angular.lowercase($scope.x1)
    $scope.x4 = angular.isString($scope.x1);
})