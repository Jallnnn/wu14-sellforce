app.controller("propertyController", ["$scope", "PropertyFactory", function($scope, PropertyFactory)
{
  console.log("propertyController is alive!");

  PropertyFactory.get();

  $scope.$on("gotPropertyData", function(event, data)
  {
    console.log("propertyController on gotPostsData: ", data);
    $scope.propertyData = data;
  });
}]);