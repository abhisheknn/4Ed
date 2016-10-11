'use strict';

/**
 * @ngdoc function
 * @name enlightenmentor.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the enlightenmentor
 */
angular.module('enlightenmentor')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
