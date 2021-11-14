'use strict';

angular.module('lembreteApp', [
    'ngRoute',
    'lembreteApp.loginView'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/login'})
}]);