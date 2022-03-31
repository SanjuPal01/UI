/// <reference path="angular.js" />

angular
.module('myModule', [])
.controller('myController', function($scope){
    $scope.showMe = false;
    $scope.showMenu = () => {
        $scope.showMe = !$scope.showMe
    }
    $scope.mouseCoordinates = (myEvent) => {
        $scope.x = myEvent.clientX
        $scope.y = myEvent.clientY
    }
})