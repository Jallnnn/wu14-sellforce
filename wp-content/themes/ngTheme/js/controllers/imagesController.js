app.controller("imagesController", ["$scope", "Images" ,"$routeParams", function($scope, Images, $routeParams) {
  console.log("imagesController is alive! params: ", $routeParams);
  $scope.myInterval = 5000;
  
  $scope.allImgs = $scope.allImgs ? true : false;
  //Property.find() accepts an object with key->value pairs that
  //map to the search filters we need in our GET request
  console.log("routeParams: ", $routeParams);
  if ($scope.allImgs) {
    Images.get();
  }
  // $scope.partialsDir = SITE_INFO.partials;

  //the interval for all carousels
  // $scope.carouselInterval = 5000;

  $scope.$on("foundProperty", function(event, data) {
    if (!$scope.allImgs) {
      console.log("propertyController on foundProperty: ", data);
      $scope.imgData = data[0].media;
    }
  });

  $scope.$on("gotImgData", function(event, data)
    {
    console.log("images: ", data);
    $scope.imgData = data;
    for (var i = 0; i < data.length; i++)
    {
      if (data[i].slug == "om-oss")
      {
        $scope.pageData = data[i];
        var pageContent = data[i].content;
        $scope.trustedHtml = $sce.trustAsHtml(pageContent);
      }
    }
  });

}]);