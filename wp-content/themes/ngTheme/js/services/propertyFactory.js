app.factory("PropertyFactory", ["WPRest", "$sce", function(WPRest, $sce) {
  var propertyServant = {
    get : function(postId) {
      var callUrl = postId ? "/posts/"+postId : "/posts";
      WPRest.restCall(callUrl, "GET", {}, {
        broadcastName: "gotPropertyData",
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

  return propertyServant;
}]);
