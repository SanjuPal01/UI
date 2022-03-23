/// <reference path="angular.js"/>

angular
.module("myModule", [])
.controller("myController", function($scope){
    var employees = [
        {firstName: "Sanju", lastName: "Pal", gender: "Male"},
        {firstName: "Sameer", lastName: "Pal", gender: "Male"},
        {firstName: "Gaurav", lastName: "Rana", gender: "Male"},
    ]
    $scope.employees = employees


    var countries = [
        {
            Name: "India",
            cities: [
                {name: "Chandigarh"}, 
                {name: "Hyderabad"}, 
                {name: "Bangalore"}
            ]
        },
        {
            Name: "USA",
            cities: [
                {name: "LA"}, 
                {name: "Chicago"}
            ]
        },
        {
            Name: "UK",
            cities: [
                {name: "London"},
                {name: "Manchester"}, 
                {name: "Birmingham"}
            ]
        },
    ];
    $scope.countries = countries
})