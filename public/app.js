// TEST
// console.log('Test: app.js');

angular.module('MyPosts', []).directive('ngmyposts',function(){

  return {

    controllerAs: 'my',
    controller: ['$http', function PostCtrl($http){

      this.$http = $http;
      var self = this;
      self.posts = [];
      self.totalPosts = 0;

      this.totalPosts = function() {
        return self.posts.length;
      };

      // All posts
      this.getPosts = function(){
        console.log('...Gathering all posts...');
        self.$http.get('/posts').then(function(res){
            self.posts = res.data;
        });

        return self.posts;
      };

      // Create/Add post


      // Edit post


      // Delete post

    }] // close of controller
  }; // close of return object
}); // close of angular.module
