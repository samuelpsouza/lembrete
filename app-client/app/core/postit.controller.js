angular.module('postit.controller', ['postit.service'])
    .controller('postItController', function ($scope, PostItService) {
        $scope.user = {
            username: "Samuel"
        }

        PostItService.get()
            .then(res => $scope.postits = res)
            .catch($scope.postits = []);

        $scope.createPostIt = function (postIt) {
            PostItService.create(postIt)
                .then(res => {
                    $scope.postIt = {};
                    $scope.postits.push(res)
                })
                .catch(err => {
                    $scope.postIt = {};
                    console.error(err);
                });
        };

        $scope.editPostIt = function (id) {
            console.log("Editing " + id)
        };

        $scope.deletePostIt = function (id) {
            console.log("Deleting " + id)
        };
    });