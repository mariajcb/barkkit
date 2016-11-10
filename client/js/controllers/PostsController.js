`use strict`

app.controller(`PostsController`, [`$scope`, `PostsService`, `$cookies`, `$location`, function($scope, PostsService, $cookies, $location) {

    const cookie = $cookies.getObject(`loggedIn`)

    $scope.view = {}

    PostsService.allPosts()
        .then(posts => {
            $scope.view.posts = posts.data
        })

    $scope.submitPost = function() {
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

    $scope.newComment = {}

    $scope.addComment = function(post) {
        if (cookie) {
            $scope.newComment.posts_id = post.id
            $scope.newComment.users_id = cookie.id
            PostsService.oneComment($scope.newComment)
                .then(newComment => {
                    post.comments.push($scope.newComment)
                    $scope.newComment = {}
                })
        } else {
            $scope.error = `You must be logged in to create a new comment.`
        }
    }

    $scope.deleteComment = function(comment) {
        const id = comment.id
        PostsService.deleteComment(comment)
            .then(function() {
                $location.url(`/`)
            })
    }

    $scope.deleteCommentFromView = function(selectComment, post) {
        post.comments.forEach((comment, i, arr) => {
            if (selectComment.id == comment.id) {
                arr.splice(i, 1)
            }
        })
    }

    //VOTES
    $scope.plusOne = function(post) {
        post.votes += 1
        PostsService.putOnePost(post, function() {})
    }

    $scope.minusOne = function(post) {
        post.votes -= 1
        PostsService.putOnePost(post, function() {})
    }

    $scope.votes = function(post) {
        if (post.votes > 0) {
            return `positive`;
        } else if (post.votes < 0) {
            return `negative`;
        } else {
            return `neutral`;
        }
    }

    //SORTING
$scope.view.sort = ""

//SEARCH
$scope.view.search = ""

}])
