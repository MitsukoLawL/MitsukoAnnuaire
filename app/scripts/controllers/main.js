'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


      this.setHead = function (li) {
        $scope.headUser = li;
      }
      this.isHead = function (li) {
        return $scope.headUser === li;
      }

      this.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      }

    });
