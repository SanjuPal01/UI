/// <reference path="angular.js" />

angular
.module('myModule', [])
.run(function($rootScope){
    $rootScope.color = "blue";
})
.controller('myController', function($scope){
    $scope.color = "red";
})