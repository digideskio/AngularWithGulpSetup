require('angular');
require('angular-route');
//var HomeController = require('./scripts/HomeController');
//var ContactController = require('./scripts/ContactController');

var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.when('/contact', {
                        templateUrl: 'views/contact.html',
                        controller: 'ContactController'
                })
		.otherwise({
			redirectTo: '/home'
		})
});

app.controller('MainController', function ($scope) {
        $scope.message = 'dude its main Controller';
});
