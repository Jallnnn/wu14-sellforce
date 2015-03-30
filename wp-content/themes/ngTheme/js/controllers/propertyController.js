app.controller("propertyController", ["$scope", "Property" ,"$routeParams", "SITE_INFO", function($scope, Property, $routeParams, SITE_INFO) {
  console.log("propertyController is alive! params: ", $routeParams);

  //Property.find() accepts an object with key->value pairs that
  //map to the search filters we need in our GET request
  Property.find($routeParams);
  $scope.partialsDir = SITE_INFO.partials;

  //the interval for all carousels
  // $scope.carouselInterval = 5000;

  $scope.$on("foundProperty", function(event, data) {
    console.log("propertyController on foundProperty: ", data);
    $scope.property = data;
    aGlobalVar = $scope.property;
    if (data.length === 0) { return; }
  });

}]);