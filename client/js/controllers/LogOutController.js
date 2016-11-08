app.controller('LogOutController', function ($cookies) {

  $cookies.remove('loggedIn')
  
})
