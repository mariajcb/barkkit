`use strict`

app.controller(`PostController`, [`$scope`, `PostsService`, `$routeParams`, `$location`, function($scope, PostsService, $routeParams, $location) {
    const id = $routeParams.id

    $scope.post = {}

    PostsService.onePost(id)
        .then(function(post) {
            console.log(`POST CONTROLLER IS FIRING`);
            $scope.post = post.data
        })

    $scope.submitEditPost = function(post) {
      console.log(`edit post controller is firing`);
        const editedPost = $scope.post
        PostsService.putOnePost(editedPost)
            .then(function() {
              console.log(`this is edited post`, editedPost)
                $location.url('/')
            })
    }

      $scope.deletePost = function(post) {
        console.log(`delete controller is firing`);
        const id = post.id
        PostsService.deleteOnePost(id)
        .then(function() {
          $location.url(`/`)
        })
      }

}])
