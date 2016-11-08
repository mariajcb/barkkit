`use strict`

app.controller(`PostsController`, [`$scope`, `PostsService`, `$cookies`, `$location`, function($scope, PostsService, $cookies, $location) {
    // $scope.posts = PostService.posts.query()

    const cookie = $cookies.getObject('loggedIn')
    console.log(`THIS IS THE COOKIE`, cookie);

    $scope.view = {}

    PostsService.allPosts()
        .then(posts => {
            $scope.view.posts = posts.data
        })

    $scope.submitPost = function() {
        console.log(`POST CONTROLLER IS FIRING`)
        if (cookie) {
          $scope.post.data.users_id = cookie.id
          PostsService.createPost($scope.post.data)
              .then(() => {
                  $scope.view.posts.push($scope.post.data)
                  $scope.post.data = {}
                  $scope.newPostForm.$setPristine()
              })
        } else {
          $scope.error = `You must be logged in to create a new post.`
        }
    }


}])
