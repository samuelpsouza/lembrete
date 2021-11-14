'use strict';

angular.module('lembreteApp.stickyNoteView', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/sticky-notes', {
            templateUrl: '/sticky-note/sticky-note.html',
            controller: 'StickyNoteCtrl'
        });
    }])
    .controller('StickyNoteCtrl', ['$scope', function ($scope) {
        $scope.lembretes = [{msg: 'Hello'}]
    }]);