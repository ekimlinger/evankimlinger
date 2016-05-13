console.log("Project up and running");

//********************** ANGULAR STUFF **************************//
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/home", {
      templateUrl: "/assets/views/routes/home.html",
      controller: "HomeController"
    }).
    when("/about", {
      templateUrl: "/assets/views/routes/about.html",
      controller: "AboutController"
    }).
    when("/contact", {
      templateUrl: "/assets/views/routes/contact.html",
      controller: "ContactController"
    }).
    otherwise({
      redirectTo: 'home'
    });
}]);

myApp.controller("HomeController", ["$scope", function($scope){
  console.log("Hey I'm home");
}]);

myApp.controller("AboutController", ["$scope", function($scope){
  console.log("Hey I'm in About");
}]);

myApp.controller("ContactController", ["$scope", function($scope){
  console.log("Hey I'm in Contact");
}]);

myApp.factory("MainService", ["$http", function($http){
    var exportObject = {};



    return exportObject;
}]);
