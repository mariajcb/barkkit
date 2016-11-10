app.controller(`AuthController`, [`$scope`, `AuthService`, `$location`, `$cookies`, function($scope, AuthService, $location, $cookies) {

    $scope.submitSignUp = function(newUser) {
        AuthService.signup.save(newUser, function(returnedObject) {
            const user = returnedObject[0]
            if (user.length === undefined) {
                $cookies.putObject(`loggedIn`, user)
                $scope.newUser = {}
                $scope.signUp.$setPristine()
                $location.url(`/`)
            } else if (user.length !== 0) {
              $scope.error = user
            }
        })
    }

    $scope.submitLogIn = function(returningUser) {
      AuthService.login.save(returningUser, function(returnedObject) {
          $cookies.putObject(`loggedIn`, returnedObject)
          $location.url(`/`)
      })
    }

}])
