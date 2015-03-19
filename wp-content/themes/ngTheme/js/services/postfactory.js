app.factory("Posts", ["WPRest", "$sce", function(WPRest, $sce) {
  var postServant = {
    get : function(postId) {
      var callUrl = postId ? "/posts/"+postId : "/posts";
      WPRest.restCall(callUrl, "GET", {}, {
        broadcastName: "gotPostData",
        callback: function(data) {
          if (data.constructor.name == "Array") {
            data.forEach(function(item) {
              item.excerpt = $sce.trustAsHtml(item.excerpt);
              item.content = $sce.trustAsHtml(item.content);
            });
          } else {
            data.excerpt = $sce.trustAsHtml(data.excerpt);
            data.content = $sce.trustAsHtml(data.content);
          }

          return data;
        }
      });
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
