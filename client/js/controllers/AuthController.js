app.controller('AuthController', ['$scope', '$cookies', 'AuthService', function($scope, $cookies, AuthService) {

  $scope.userObj = {}

  $scope.signup = function(obj) {
    authService.signup(obj).then(function(response) {})
  }

  $scope.login = function(obj) {
    console.log(`AuthController IS FIRING`);
    authService.login(obj).then(function(response) {})
  }

}])
