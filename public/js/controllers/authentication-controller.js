'use strict';
angular.module('authenticationController', [])
    .controller('authenticationController', function($scope, Authenticate, $http){
        
        $scope.user = {};
        $scope.message = '';    
    
        $scope.signup = function(){
            Authenticate.createUser($scope.user)
                .success(function(data){
                    var returnedValue = data; 
                    if(returnedValue.message)
                        $scope.message = returnedValue.message;
                    else{
                        $scope.message = '';
                        alert('user created ' + returnedValue.local.email);
                    }
                });
        }

        $scope.login = function(){
            Authenticate.login($scope.user)
                .success(function(user){
                    alert('user logged In ' + user);
                });
        }
        
    });