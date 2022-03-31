/// <reference path="angular.js" />

angular
.module('myModule', [])
.controller('myController', ($scope) => {
    $scope.names = ["Sanju", "Sameer", "Karan"]
    $scope.cars = [
        {model : "Ford Mustang", color : "red"},
        {model : "Fiat 500", color : "white"},
        {model : "Volvo XC90", color : "black"}
      ];

      $scope.carsObj = {
        car01 : "Ford",
        car02 : "Fiat",
        car03 : "Volvo"
      };

      $scope.allCars = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
      };
})