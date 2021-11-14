'use strict';

angular.module('lembreteApp.loginView', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginViewCtrl'
        });
    }])
    .controller('LoginViewCtrl', ['$scope', function ($scope) {
        $scope.login = function (credentials) {
            console.log(credentials);
        }
    }]);