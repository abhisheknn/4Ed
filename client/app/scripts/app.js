'use strict';

/**
 * @ngdoc overview
 * @name chirpApp
 * @description
 * # chirpApp
 *
 * Main module of the application.
 */
angular
  .module('chirpApp',['home','ui.router']);

angular.module('chirpApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){


$urlRouterProvider.otherwise('/home');


$stateProvider.state('home', {

    url : '/home',
    templateUrl:'../views/home/home.html'
})
.state('home.top', {

    url : '/top',
    templateUrl:'../views/home/home.top.tpl.html'
}).state('home.right', {

    url : '/right',
    templateUrl:'../views/home/home.right.tpl.html'
}).state('home.left', {

    url : '/left',
    templateUrl:'../views/home/home.left.tpl.html'
}).state('about', {

    url : '/about',
    templateUrl:'../views/home/home.html'
}).state('contact', {

    url : '/contact',
    templateUrl:'../views/home/home.html'
});

}]);