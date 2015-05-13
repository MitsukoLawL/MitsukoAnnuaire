'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/roles', {
        templateUrl: 'views/Roles/list.html',
        controller: 'RolesCtrl'
      })
      .when('/roles/:userId', {
        templateUrl: 'views/Roles/show.html',
        controller: 'RolesCtrl'
      })
      .when('/projects' , {
        templateUrl: 'views/Projects/list.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:userId', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
