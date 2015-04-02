//our .factory() service for "Pages" rest calls
app.factory("Pages", ["WPRest", function (WPRest) {
  //in a .factory() service object literal syntax is required
  var pageServant = {
    get : function(pageId) {
      var callUrl = pageId ? "/pages/"+pageId : "/pages";
      WPRest.restCall(callUrl, "GET", {}, "gotPageData");
    },
    post : function(data) {
      var callUrl = "/pages";
      WPRest.restCall(callUrl, "POST", data, "savedNewPage");
    },
    put : function(pageId, data) {
      var callUrl = "/pages/"+pageId;
      WPRest.restCall(callUrl, "PUT", data, "updatedPage");
    },
    delete : function(pageId) {
      var callUrl = "/pages/"+pageId;
      WPRest.restCall(callUrl, "DELETE", {}, "deletedPage");
    },
    find : function(searchParams) {
      searchParams = searchParams ? searchParams : {};
      
      /*
        example searchParams object:
        {
          "name" : "my-first-property"
        }
      */
 
      var callUrl = "/pages";
      var first = true;
      //build a REST callUrl from search params, 
      for (var i in searchParams) {
        //searchParams object keys are filter keys, 
        //searchParams object values are filter values
        callUrl += first ?
        "?filter["+i+"]="+searchParams[i] :
        "&filter["+i+"]="+searchParams[i];
        first = false;
      }

      WPRest.restCall(callUrl, "GET", {}, "foundPages");
    }
  };

  //.factory() services MUST return an object
  return pageServant;
}]);
