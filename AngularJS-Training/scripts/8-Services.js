/// <reference path="angular.js" />

// Go to particular directory where your html file is residing and then run this command
// python3 -m http.server
// It will convert that directory into localhost server
// or You can use MAMP
angular
.module("myModule", [])
.controller('myController', function($scope, $location){
    $scope.myURL = $location.absUrl();          // You can also use window.location but while doing work in angular always use $location
})
// Using Moesif Origin & CORS Changer for solving the CORS issue. Just turn on this extension while running this program on chrome.
// After doing your close it
.controller('myHTTPController', function($scope, $http){
    $http.get("http://localhost:8000/data.html").then(function(response){
        $scope.myWelcome = response.data;
    })
})
.controller('myTimeoutController', function($scope, $timeout){
    $scope.header = "Hello World";
    $timeout(function(){
        $scope.header = "How are You?";
    }, 2000);
})
.controller('myIntervalController', function($scope, $interval){
    $scope.currTime = new Date().toLocaleTimeString()
    $interval(function(){
        $scope.currTime = new Date().toLocaleTimeString()
    }, 1000)
})
.service('myOwnService', function(){
    this.myFunc = function(x){
        return x.toString(16)
    }
})
.controller('myOwnController', function($scope, myOwnService){
    $scope.hex = myOwnService.myFunc(255)
})