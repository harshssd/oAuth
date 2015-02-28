'use strict';
angular.module('authenticateController', [])
    .controller('authenticateController', function($scope, Authenticate, $http){
        
        $scope.user = null;
    
        $scope.login = function(){
            alert($scope.user.email + " " + $scope.user.password);
            $http.post('/login', {email: $scope.user.email, password: $scope.user.password});
//            Authenticate.login($scope.user)
//                .success(function(data){
//                    $scope.loggedIn = true;
//                })
        }
        
        $scope.signup = function(){
            alert($scope.user.email);
            $http.post('/signup', {email: $scope.user.email, password: $scope.user.password})
        }
    
    });