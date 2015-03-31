app.controller("propertyController", ["$scope", "Property" ,"$routeParams", "$sce", "SITE_INFO", function($scope, Property, $routeParams, $sce, SITE_INFO) {
  console.log("propertyController is alive! params: ", $routeParams);

  //Property.find() accepts an object with key->value pairs that
  //map to the search filters we need in our GET request
  Property.find($routeParams);
  $scope.partialsDir = SITE_INFO.partials;

  //the interval for all carousels
  // $scope.carouselInterval = 5000;

  $scope.$on("foundProperty", function(event, data) {
    console.log("propertyController on foundProperty: ", data[0]);
    $scope.property = data;
    aGlobalVar = $scope.property;
    if (data.length === 0) { return; }

    $scope.property = data[0];
    console.log("our stuff", $scope.property);
    



  });

}]);