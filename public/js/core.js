'use strict';

var taskLists = angular.module('taskListApp', ['ngRoute', 
                                'authenticateController', 'authenticateService']);

taskLists.config(['$routeProvider', 
               function($routeProvider){
//                   console.log('inside routes');
//                   $locationProvider.html5Mode(true);
                   $routeProvider
                        .when('/', {
                            templateUrl : 'views/home.html',
                            controller : 'authenticateController'
                        })
                        .when('/login', {
                            templateUrl : 'views/login.html',
                            controller : 'authenticateController'
                        })
                        .when('/signup', {
                            templateUrl : 'views/signup.html',
                            controller : 'authenticateController'
                        })
                        .when('/profile', {
                            templateUrl : 'views/profile.html',
                            controller : 'authenticateController'
                        })
                        .otherwise({
                            redirectTo : '/'
                        });
                        
               }]); 