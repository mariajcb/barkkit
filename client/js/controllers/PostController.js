`use strict`

app.controller(`PostController`, [`$scope`, `PostsService`, `$routeParams`, `$location`, `$cookies`, function($scope, PostsService, $routeParams, $location, $cookies) {
    const id = $routeParams.id
    const cookie = $cookies.getObject(`loggedIn`)

    $scope.post = {}

    PostsService.onePost(id)
        .then(function(post) {
            $scope.post = post.data
        })

    $scope.submitEditPost = function(post) {
        if (cookie.id == $scope.post.users_id) {
            const editedPost = $scope.post
            PostsService.putOnePost(editedPost)
                .then(function() {
                    console.log(`this is edited post`, editedPost)
                    $location.url(`/`)
                })
        } else {
            $scope.error = `You must be logged in to edit post.`
        }
    }

    $scope.deletePost = function(post) {
        // if (cookie.id == post.users_id) {
            let check = confirm(`Are you sure you want to delete the post?`)
            if (check) {
                const id = post.id
                PostsService.deleteOnePost(id)
                    .then(function() {
                        $location.url(`/`)
                    })
            } else {
                $location.url(`#/{{post.id}}`)
            }
        }
    // } else {
    //     $scope.error = `You must be logged in to delete a post.`
    // }

}])
