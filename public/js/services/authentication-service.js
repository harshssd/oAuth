'use strict';

angular.module('authenticationService', [])
            
    .factory('Authenticate', function($http){
        return {
            createUser : function(user){
                return $http.post('/api/signup', user);   
                
            },
            login : function(user){
                return $http.post('/api/login', user);   
            }
        }
    });