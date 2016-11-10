`use strict`

app.factory(`PostsService`, [`$http`, function($http) {
    return {
        allPosts: function() {
            return $http.get(`/posts`)
        },
        createPost: function(newPost) {
            return $http.post(`/posts`, newPost)
        },
        onePost: function(id) {
            return $http.get(`/posts/${id}`)
        },
        putOnePost: function(editedPost) {
            let id = editedPost.id
            return $http.put(`/posts/${id}`, editedPost)
        },
        oneComment: function(newComment) {
            return $http.post(`/posts/addcomment`, newComment)
        },
        deleteComment: function(id) {
            return $http.delete(`/posts/deletecomment/${id}`)
        },
        deleteOnePost: function(id) {
            return $http.delete(`/posts/${id}`)
        }
    }
}])
