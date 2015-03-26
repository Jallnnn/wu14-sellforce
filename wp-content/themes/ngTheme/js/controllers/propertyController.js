app.controller("propertyController", ["$scope", "$location", "PropertyFactory", function($scope, $location, PropertyFactory)
{
  console.log("propertyController is alive!");

  PropertyFactory.get();

  $scope.$on("gotPropertyData", function(event, data)
  {
    console.log("propertyController on gotPostsData: ", data);
    $scope.propertyData = data;
  });

  $scope.showPropertyDetail = function(detailTitle, detailLink){
    alert("Going to show " + detailTitle + ". With link: " + detailLink);

    // use $location.url(---some---) to switch to detail view
    // $location.url(detailLink);
  };

}]);
