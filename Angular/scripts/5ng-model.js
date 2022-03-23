/// <reference path="angular.js" />

angular
.module("myModule", [])
.controller("myController", function($scope){
    $scope.message = "hello";

    var employee = {
        firstName: "Sanju", 
        lastName: "Pal",
        gender: "Male"
    };
    $scope.employee = employee;
});


// ng-model works with select, input and textarea