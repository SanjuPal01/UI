/// <reference path="angular.js" />

angular
.module("myModule", [])
.controller("myController", function($scope){
    var employees = [
        { name: "Ben", gender: "Male", salary: 55000, city: "London" },
        { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
        { name: "Mark", gender: "Male", salary: 57000, city: "London" },
        { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
        { name: "Todd", gender: "Male", salary: 60000, city: "London" },
    ];

    $scope.employees = employees;
    $scope.search = function(item){
        if($scope.searchT == undefined)
            return true;
        else{
            if(item.name.toLowerCase().indexOf($scope.searchT.toLowerCase()) != -1 ||
                item.city.toLowerCase().indexOf($scope.searchT.toLowerCase()) != -1)
                return true;
        }
        return false;
    }
})