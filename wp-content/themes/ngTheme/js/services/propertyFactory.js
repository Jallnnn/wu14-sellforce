//this factory has two dependencies: "WPRest" and "$sce", 
//which is a service we have created to handle all
//REST communication to/from WordPress.
app.factory("Property", ["WPRest", "$sce", function(WPRest, $sce) {

  //this array will hold all finished property models
  //and is what we will broadcast to the app when everything
  //is done
  var resultsToBroadcast = [];


  var propertyServant = {
    find : function(searchParams, pageNo, startOver) {
 
      pageNo = pageNo ? pageNo : 1;
      searchParams = searchParams ? searchParams : {};
 

      if (startOver || pageNo === 1) {
        resultsToBroadcast.length = 0;
      }
      
      /*
        example searchParams object:
        {
          "name" : "my-first-property"
        }
      */
 
 
      //we are always searching for posts
      //in the category "properties"
      //we are always searching for posts
      var callUrl = "/properties?page="+pageNo;

      //build a REST callUrl from search params, 
      for (var i in searchParams) {
        //searchParams object keys are filter keys, 
        //searchParams object values are filter values
        if (searchParams[i].constructor.name != "Object") {
          callUrl +="&filter["+i+"]="+searchParams[i];
        } else {
          for (var j in searchParams[i]) {
            callUrl +="&filter["+i+"]["+j+"]="+searchParams[i][j];
          }
        }
      }
 
   
      console.log("Property find method will now call REST url: ", callUrl);
 
 
      //and make the REST call using WPRest to get all property posts
      WPRest.restCall(callUrl, "GET", {}, {
        broadcastName: "notImportant", //this broadcast is not important
        callback: function(postData) {
          //callback is triggered when we get data but 
          //BEFORE we broadcast data throughout the app


          // console.log("Property found property posts: ", postData);

          //clean up bad postdata before we start
          for (var i = postData.length -1 ; i > 0; i--) {
            if (!postData[i].terms.property) {
              postData.splice(i, 1);
            }
          }


          //loop through all posts and find their property tag value
          var i = 0;
          postData.forEach(function(post) {
            //need this to check if last post has gotten its media
            //so we know when to broadcast
            var last = i === postData.length-1;


            // //if no property tag exists, skip this post
            // if (!post.terms.property) { i++; return; }


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
                // console.log("Property found property media: ", mediaData);


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
 
  //return our factory object
  return propertyServant;
}]);