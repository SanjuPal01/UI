/// <reference path="angular.js" />

//Chaining

angular
    .module("myModule", [])
    .controller("myController", function($scope){
        var employee = {
            firstName: "Sanju",
            lastName: "Pal"
        }
        $scope.emp = employee;
    })