angular.module("auth.service", [])
    .factory("User", function ($http) {
        return {
            login: function (username, passwd) {
                return $http.post('/api/login', {username: username, passwd: passwd});
            },
            logout: function () {
                return $http.post('/api/logout');
            }
        }
    });