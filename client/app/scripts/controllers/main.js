'use strict';

/**
 * @ngdoc function
 * @name chirpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chirpApp
 */
angular.module('chirpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
