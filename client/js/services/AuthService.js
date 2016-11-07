app.service('AuthService', ['$http', 'location', function($http, $location) {
    console.log(`AUTHSERVICE IS FIRING`);
    return {
        signup: function(userObj) {
            return $http.post('/api/signup', userObj).then(function(response) {
                $location.path('/')
            })
        },
        login: function(userObj) {
            return $http.post('/api/login', userObj).then(function(response) {
                $location.path('/')
            })
        }
    }
}])
