'use strict';

angular.module('lembreteApp.stickyNoteView', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/sticky-notes', {
            templateUrl: '/sticky-note/sticky-note.html',
            controller: 'StickyNoteCtrl'
        });
    }])
    .controller('StickyNoteCtrl', ['$scope', function ($scope) {
        $scope.stickyNotes = [
            {
                title: 'My First Sticky Note',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut nisl mi. Etiam lectus sem, pellentesque nec molestie eu, ultricies quis sapien. Nullam sodales massa ut eros ultrices, ut imperdiet ante vehicula. '
            },
            {
                title: 'My Second Sticky Note',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut nisl mi. Etiam lectus sem, pellentesque nec molestie eu, ultricies quis sapien. Nullam sodales massa ut eros ultrices, ut imperdiet ante vehicula. '
            },
            {
                title: 'My Third Sticky Note',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut nisl mi. Etiam lectus sem, pellentesque nec molestie eu, ultricies quis sapien. Nullam sodales massa ut eros ultrices, ut imperdiet ante vehicula. '
            },
            {
                title: 'My Fourth Sticky Note',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut nisl mi. Etiam lectus sem, pellentesque nec molestie eu, ultricies quis sapien. Nullam sodales massa ut eros ultrices, ut imperdiet ante vehicula. '
            }
        ]
    }]);