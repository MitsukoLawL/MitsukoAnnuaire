'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.noValue = "undefined";

      /**
      $scope.getNumber = function(num) {
        return new Array(num);
      }
    **/

    this.setShow = function(user) {
      $scope.showUser = user;
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + user.id + '/Projects')
        .success(function(data) {
          if (data.status == "success") {
            $scope.showUserProject = data.data;
          }
        });
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + user.id + '/Roles')
          .success(function(data) {
            if (data.status == "success") {
              $scope.showUserRole = data.data;
              /**
              var i;
              for(i = 0; i < $scope.showUserRole.length; i++){
                $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $scope.showUserRole[i].ProjectId)
                  .success(function(data) {
                    $scope.projects[i] = data.title;
                  });
              }**/

            }
          });
    }

    this.isSet = function(user){
      return $scope.showUser === user;
    };

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;

      });

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      });
    }

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + '/Roles')
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentUserRoles = data.data;
          }
        });
    }
    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + '/Projects')
          .success(function(data) {
            if (data.status == "success") {
              $scope.currentUserProject = data.data;
            }
          });
    }

    $scope.deleteUser = function(id){
          $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id);
    };
    this.addUser = function(newUser){
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/', newUser)
        .success(function(data){
          $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
            .success(function(data) {
              $scope.users = data.data;
            });

        });
    };
    $scope.updateUser = function(newUser){
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+newUser.id, newUser)
    };

  }]);
