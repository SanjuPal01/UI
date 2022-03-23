var myApp = angular.module("myModule", [])

var myController = function ($scope){
    $scope.myMessage = "anuglarJs"
}

myApp.controller("myController", myController)