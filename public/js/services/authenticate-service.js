'use strict';

angular.module('authenticateService', [])
            
    .factory('Authenticate', function($http){
        return {
            login : function(userDetails) {
                console.log(userDetails);
                return $http.post('/api/login', userDetails);   
            }
        }
    });