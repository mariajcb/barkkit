app.controller('LogOutController', [`$cookies`, function($cookies) {
  $cookies.remove('loggedIn')
}])
