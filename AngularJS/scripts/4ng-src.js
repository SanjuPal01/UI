/// <reference path="angular.js"/>

angular
.module("myModule", [])
.controller("myController", function($scope){
    var country = {
        name: "India",
        capital: "New Delhi",
        flag: "./Images/india-flag.jpeg"
    };
    $scope.country = country
})