angular.module("auth.controller", [])
    .controller("authController", function ($scope) {
            $scope.login = function () {
                console.log("Log out")
            };

            $scope.logout = function () {
                console.log("Log out");
            }
        }
    );