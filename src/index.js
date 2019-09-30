var app = angular.module("myApp",[ngRoute]);
app.controller("authController" ,function($scope){
    $scope.login = function(){
        if($scope.userId =="abc" && $scope.password == "123"){
           console.log("hdgfhdg");
        }
    }
    
});
