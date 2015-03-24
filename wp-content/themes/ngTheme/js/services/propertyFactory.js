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
    },
    find : function(searchParams) {
      searchParams = searchParams ? searchParams : {};
 
      /*
        example searchParams object:
        {
          "name" : "my-first-property"
        }
      */
      //we are always searching for posts
      //in the category "properties"
      var callUrl = "/posts?filter[category_name]=properties";
      //build a REST callUrl from search params, 
      for (var i in searchParams) {
        //searchParams object keys are filter keys, 
        //searchParams object values are filter values
        callUrl += "&filter["+i+"]="+searchParams[i];
      }
      console.log("Property find method will now call REST url: ", callUrl);
      //and make the REST call using WPRest to get all property posts
      WPRest.restCall(callUrl, "GET", {}, {
        broadcastName: "notImportant", //this broadcast is not important
        callback: function(postData) {
          //callback is triggered when we get data but 
          //BEFORE we broadcast data throughout the app
          console.log("Property found property posts: ", postData);
          //this array will hold all finished property models
          //and is what we will broadcast to the app when everything
          //is done
          var resultsToBroadcast = [];
          //loop through all posts and find their property tag value
          var i = 0;
          postData.forEach(function(post) {
            //need this to check if last post has gotten its media
            //so we know when to broadcast
            var last = i === postData.length-1;
            //if no property tag exists, skip this post
            if (!post.terms.property) { return; }
 
 
            //trust post excerpt and content as HTML 
            //(has secururity implications)
            post.excerpt = $sce.trustAsHtml(post.excerpt);
            post.content = $sce.trustAsHtml(post.content);
 
 
            //assume only one property tag per post
            var propertyTag = post.terms.property[0].slug;
 
 
            //build a REST callUrl from media
            //hardcoded to the property taxonomy
            var mediaCallUrl = "/media?filter[property]="+propertyTag;
 
 
            //and make the REST call using WPRest to get all property media
            WPRest.restCall(mediaCallUrl, "GET", {}, {
              broadcastName: last ? "foundProperty" : "notDone", //this broadcast is VERY important
              callback: function(mediaData) {
                //callback is triggered when we get data but 
                //BEFORE we broadcast data throughout the app
 
 
                //just log data
                console.log("Property found property media: ", mediaData);
 
 
                //using the resultsToBroadcast array declared in the
                //beginning of the function
                //to create and store a new property model
                resultsToBroadcast.push({
                  "media": mediaData,
                  "post": post,
                  "propertyData": post.property_data
                });
 
 
                //when the very last media REST call is complete,
                //return resultsToBroadcast so it can be broadcasted
                if (last) {
                  //return our complete resultsToBroadcast array
                  //THIS IS WHAT WILL BE BROADCASTED THROUGHOUT THE APP
                  //AND PICKED UP BY ANY LISTENERS FOR "gotProperties"
                  //(in controllers: 
                  //$scope.$on("gotProperties", function(event, data){ ... });
                  return resultsToBroadcast;
                }
              }
            });
 
 
            i++; //increase i for each iteration of forEach() loop
          });
 
 
          //this function does not need to return anything,
          //we have no interest in using it's broadcast
        }
      });
    }
  };

  return propertyServant;
}]);
