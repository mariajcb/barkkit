`use strict`

app.controller(`PostsController`, [`$scope`, `PostsService`, function($scope, PostsService) {
    $scope.view = {}

    PostsService.allPosts()
      .then(posts => {
        $scope.view.posts = posts.data
      })

    $scope.submitPost = function(){
    console.log(`POST CONTROLLER IS FIRING`)
    PostsService.createPost($scope.post.data)
    .then(() => {
      $scope.view.posts.push($scope.post.data)
      $scope.post.data = {}
      $scope.newPostForm.$setPristine()
      })
    }
}])
