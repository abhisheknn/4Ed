'use strict';



angular.module('home',[]);
angular.module('enlightenmentor',['home','ui.router']);

angular.module('enlightenmentor').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){


$urlRouterProvider.otherwise('/home/college');


$stateProvider.state('home', {

    url : '/home',
    templateUrl:'../views/home/home.html'
}).state('home.college', {

    url : '/college',
    views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl:'../views/pagelayout.tpl.html' },

            // the child views will be defined here (absolutely named)
            'top@home.college': { templateUrl:'../views/home/home.top.tpl.html' ,controller:'homeTopCtrl'},
            'right@home.college': { templateUrl:'../views/home/home.right.tpl.html' ,controller:'homeRightCtrl' },
            'left@home.college': { templateUrl:'../views/home/home.left.tpl.html',controller:'homeLeftCtrl' }
            // for column two, we'll define a separate controller 
        }
}).state('about', {

    url : '/about',
    templateUrl:'../views/home/home.html'
}).state('contact', {

    url : '/contact',
    templateUrl:'../views/home/home.html'
});

}]);