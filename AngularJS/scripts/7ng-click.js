/// <reference path="angular.js"/>

angular.module("myModule", [])
.controller("myController", function($scope){
    var technologies = [
        {name: "C++", like:0, dislike: 0},
        {name: "GO", like:0, dislike: 0},
        {name: "Angular", like:0, dislike: 0},
    ];
    $scope.technologies = technologies
    $scope.incrementLikes = function(technology){
        technology.like++;
    }
    $scope.incrementDislikes = function(technology){
        technology.dislike++;
    }
})