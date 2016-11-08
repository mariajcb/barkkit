// app.factory(`AuthService`, [`$http`, function ($http) {
//   return {
//     login: function(returningUser) {
//       return $http.post('/login', returningUser)
//     }
//   }
// }])


app.service("AuthService", function($resource) {
  console.log(`AUTH SERVICE IS FIRING`);
    return {
      signup: $resource('signup/:id', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: true
        }
      }),
      login: $resource('login/:id', {id: '@id'}, {
        'save': {
          method: 'POST',
          isArray: false
        }
      })
  }
})
