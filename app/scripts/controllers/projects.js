'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      $scope.getNumber = function(num) {
        return new Array(num);
      }


    this.setShowP = function(user) {
      $scope.showProject = user;
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + user.id + '/Users')
          .success(function(data) {
            if (data.status == "success") {
              $scope.showProjectUser = data.data;
            }
          });
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + user.id + '/Roles')
          .success(function(data) {
            if (data.status == "success") {
              $scope.showProjectRole = data.data;
            }
          });
    }
    this.isSetP = function(user){
      return $scope.showProject === user;
    };
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
      .success(function(data) {
        $scope.projects = data.data;

      });

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.userId)
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentProject = data.data;
          }
        });
    }
      if($routeParams.userId) {
        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.userId + '/Roles')
            .success(function(data) {
              if (data.status == "success") {
                $scope.currentProjectRole = data.data;
              }
            });
      }
      if($routeParams.userId) {
        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.userId + '/Users')
            .success(function(data) {
              if (data.status == "success") {
                $scope.currentProjectUser = data.data;
              }
            });
      }
      $scope.deleteProj = function(id){
        $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + id);
      }
      $scope.addProj = function(newUser){
        $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', newUser);
      }
      $scope.updateProj = function(newUser){
        $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+newUser.id, newUser);
      }
  }]);
