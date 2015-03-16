'use strict';

var taskLists = angular.module('taskListApp', ['ngRoute', 
                                'authenticationController', 'authenticationService']);

taskLists.config(['$routeProvider', 
               function($routeProvider){
//                   $locationProvider.html5Mode(true);
                   $routeProvider
                        .when('/', {
                            templateUrl : 'views/home.html',
                            controller : 'authenticationController'
                        })
                        .when('/login', {
                            templateUrl : 'views/login.html',
                            controller : 'authenticationController'
                        })
                        .when('/signup', {
                            templateUrl : 'views/signup.html',
                            controller : 'authenticationController'
                        })
                        .when('/profile', {
                            templateUrl : 'views/profile.html',
                            controller : 'authenticationController'
                        })
                        .otherwise({
                            redirectTo : '/'
                        });
                        
               }]); 