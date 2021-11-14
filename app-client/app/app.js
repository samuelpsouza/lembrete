'use strict';

angular.module('lembreteApp', [
    'ngRoute',
    'lembreteApp.loginView',
    'lembreteApp.stickyNoteView'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/login'})
}]);