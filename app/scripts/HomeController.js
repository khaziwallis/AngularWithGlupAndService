var app = angular.module('app');

app.controller('HomeController', function ($scope) {
	$scope.message = 'dude its Home Controller';
	/*var userData = {
		id: '123'
	};
	var success = function (response) {
		alert('Success: ' + response);
	};
	var failure = function (error) {
		alert('error: ' + error);
	};
	Users.get(userData, success, failure);*/
});
