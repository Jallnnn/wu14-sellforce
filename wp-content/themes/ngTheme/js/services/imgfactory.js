app.factory("Images", ["WPRest", function (WPRest) {
  //in a .factory() service object literal syntax is required
  var imgServant = {
    get : function(propertyTag) {
    	var mediaCallUrl = "";
		if (!propertyTag) {
			mediaCallUrl = "/media";
		}
		else {
			mediaCallUrl = "/media?filter[property]="+propertyTag;
		}
		WPRest.restCall(mediaCallUrl, "GET", {}, "gotImgData");
           
        }
    };
  //.factory() services MUST return an object
  return imgServant;
}]);