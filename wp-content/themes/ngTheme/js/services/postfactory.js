app.factory("Posts", ["WPRest", function(WPRest) {
  var postServant = {
    get : function(postId) {
      var callUrl = postId ? "/posts/"+postId : "/posts";
      WPRest.restCall(callUrl, "GET", {}, "gotPostData");
    },
    post : function(data) {
      var callUrl = "/posts";
      WPRest.restCall(callUrl, "POST", data, "savedNewPost");
    },
    put : function(postId, data) {
      var callUrl = "/posts/"+postId;
      WPRest.restCall(callUrl, "PUT", data, "updatedPost");
    },
    delete : function(postId) {
      var callUrl = "posts/"+postId;
      WPRest.restCall(callUrl, "DELETE", {}, "deletedPost");
    }
  };

  return postServant;
}]);
