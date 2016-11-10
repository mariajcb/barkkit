`use strict`

const app = angular.module(`goodDog`, [`ngAnimate`, `ngRoute`, `ngResource`, `ngCookies`])

app.config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
});


app.config([`$resourceProvider`, function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.config(function($routeProvider) {
    $routeProvider
        .when(`/`, {
            templateUrl: `./views/posts.html`,
            controller: `PostsController`
        })
        .when(`/login`, {
            templateUrl: `./views/login.html`,
            controller: `AuthController`
        })
        .when(`/logout`, {
            templateUrl: `./views/logout.html`,
            controller: `LogOutController`
        })
        .when(`/signup`, {
          templateUrl: `./views/signup.html`,
          controller: `AuthController`
        })
        .when(`/:id`, {
            templateUrl: `./views/post.html`,
            controller: `PostController`
        })
})
