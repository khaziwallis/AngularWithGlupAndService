require('angular-resource');
var app = angular.module('app',['ngResource']);

app.factory('Users', function ($resource) {
    return $resource('http://www.mocky.io/v2/564dbe320f00007523d4e20c', {
    });
});