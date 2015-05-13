'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('RolesCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /** On recupere les users pour avoir les id dans la combobox **/
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });
    /** On recupere les projets pour avoir les id dans la combobox **/
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
      .success(function(data) {
        $scope.projects = data.data;
      });


    this.setShowR = function(user) {
      $scope.showRole = user;
    }
    this.isSetR = function(user){
      return $scope.showRole === user;
    };
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles')
      .success(function(data) {
        $scope.roles = data.data;
      });

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + $routeParams.userId)
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentRole = data.data;
          }
        });
    }

    $scope.addRole = function(newUser){
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', newUser);
    }
    $scope.deleteRole = function(id){
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/' + id);
    }
    $scope.updateRole = function(newUser){
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/'+newUser.id, newUser);
    }
  }]);
