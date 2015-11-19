require('angular');
require('angular-route');
require('angular-resource');
var app = angular.module('app',['ngRoute','ngResource']);

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

app.controller('MainController', function ($scope, Users, Employees) {
    $scope.message = 'dude its main Controller';
    var success = function (response) {
        if (response.users) {
            $scope.users = response;     
        } else {
            $scope.employees = response;
        }
       
    };
    var failure = function (error) {
       alert('Error occured....:(');
    };
    Users.get(success, failure);

    Employees.get(success, failure);

});

app.factory('Users', function ($resource) {
    return $resource('http://www.mocky.io/v2/564dbe320f00007523d4e20c', {
    });
});

app.factory('Employees', function ($resource) {
    return $resource('./jsonData/employees.json', {
    });
});

