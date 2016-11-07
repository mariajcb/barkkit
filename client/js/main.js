`use strict`

const app = angular.module(`goodDog`, [`ngRoute`])

app.config(function($routeProvider) {
    $routeProvider
        .when(`/`, {
            templateUrl: `./views/posts.html`,
            controller: `PostsController`
        })
        .when(`/:id`, {
            templateUrl: `./views/post.html`,
            controller: `PostController`
        })
        .when('/loginsignup', {
            templateUrl: './views/loginsignup.html',
            controller: 'AuthController'
        })
})
