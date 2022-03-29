/// <reference path="angular.js" />

angular
.module('myModule', [])
.controller('myController', function($scope, $http){
    $http.get("http://localhost:8000/data.html").then(function(response){
        $scope.myWelcome = response.data
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText; 
    })
})
.controller('myJSONController', function($scope, $http){
    $http.get('http:localhost:8000/customers.php').then(function(response){
        $scope.myData = response.data.records;
    })
})