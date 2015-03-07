'use strict';
angular.module('authenticationController', [])
    .controller('authenticationController', function($scope, Authenticate, $http){
        
        $scope.user = {};
    
        $scope.signup = function(){
            Authenticate.createUser($scope.user)
                .success(function(user){
                    alert('user created');
                });
        }

        $scope.login = function(){
            Authenticate.login($scope.user)
                .success(function(user){
                    alert('user logged In');
                });
        }
        
    });