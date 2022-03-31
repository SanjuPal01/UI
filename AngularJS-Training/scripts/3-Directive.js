/// <reference path="angular.js" />


/*
The legal restrict values are:

E for Element name
A for Attribute
C for Class
M for Comment
By default the value is EA, meaning that both Element names and attribute names can invoke the directive.
*/


var app = angular.module("myApp", []);

app.directive("myOwnDirective", function(){
    return {
        restrict: "EAC",
        template: "<h1>We dit it</h1>"
    };
});

app.controller("myController", function($scope) {
    $scope.fruits=['apple', 'orange', 'banana']
});
