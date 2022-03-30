/// <reference path="angular.js" />

angular
.module("myModule", ["ngRoute"])
.config(function($routeProvider){
    // $locationProvider.hashPrefix(''); // add configuration
    $routeProvider
    .when("/", {
        // templateUrl: "main.html"
        template: "<h1>Main</h1><p>Click on the links to change this content</p>"
    })
    .when("/london", {
        // templateUrl : "london.htm"
        template: "<h1>London</h1><p>Awesome Place to Visit.</p><p>{{msg}}</p>",
        controller : "londonCtrl",
    })
    .when("/paris", {
        // templateUrl: "paris.html"
        template: "<h1>Paris</h1><p>Must Visit once.</p><p>{{msg}}</p>",
        controller : "parisCtrl",
    })
    .otherwise({
        template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
    });
})
.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
})
.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
})