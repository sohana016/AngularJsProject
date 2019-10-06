var app = angular.module("myApp",[ngRoute]);

app.config(function($routeProvider) { // configure for routing
    $routeProvider.when("/", {
        templateUrl: "homePage.html",
        controller: "authController"
    }).when("/login", {
        templateUrl: "src/login.html",
        controller: "authController"
    })
    .when("/signUp", {
        templateUrl: "src/signUp.html",
        controller: "authController"
    })
});
app.controller("authController" ,function($scope){
    $scope.login = function(){
        if($scope.userId =="abc" && $scope.password == "123"){
        //    console.log("hdgfhdg");
        window.location.href="/homePage.html"
        }
    }
    
});
