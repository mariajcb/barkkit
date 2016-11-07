app.factory(`PostsService`, [`$http`, function ($http) {
  return {
    allPosts: function() {
      return $http.get(`/api/posts`)
    },
    createPost: function(newPost) {
      return $http.post(`/api/posts`, newPost)
    },
    onePost: function(id) {
      return $http.get(`/api/posts/${id}`)
    },
    putOnePost: function(editedPost) {
      console.log(`putOnePost is FIRING`);
      let id = editedPost.id
      return $http.put(`/api/posts/${id}`, editedPost)
    },
    deleteOnePost: function(id) {
      return $http.delete(`/api/posts/${id}`)
    }
  }
}])
