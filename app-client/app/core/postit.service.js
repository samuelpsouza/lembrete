const baseUrl = "/api/postits";

angular.module('postit.service', [])
    .factory('PostIt', function ($http) {
            return {
                get: function () {
                    return $http.get(baseUrl);
                },
                create: function (data) {
                    return $http.post(baseUrl, data);
                },
                edit: function (id, data) {
                    return $http.put(baseUrl.concat("/").concat(id), data);
                },
                delete: function (id) {
                    return $http.delete(baseUrl.concat(id));
                }

            }
        }
    );