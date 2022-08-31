angular.module('postit.controller', [])
    .controller('postItController', function ($scope, $http, $window, PostIt) {
        $scope.user = {
            username: "Samuel"
        }

        $scope.postits = [
            {
                id: 1,
                title: "Hello World",
                content: "Refactoring first AngularJs App"
            },
            {
                id: 2,
                title: "Hello",
                content: "Another note"
            },
            {
                id: 3,
                title: "Hi",
                content: "Sticky notes"
            }
        ];

        $scope.createPostIt = function (postIt) {
            postIt.id = $scope.postits.length + 1;
            $scope.postits.push(postIt);
            $scope.postIt = {}
        };

        $scope.editPostIt = function (id) {
            console.log("Editing " + id)
        };

        $scope.deletePostIt = function (id) {
            console.log("Deleting " + id)
        };
    });