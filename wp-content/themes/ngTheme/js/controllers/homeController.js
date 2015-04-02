//"ngTheme" home controller.
//dependent on $scope && WPService being injected to run
app.controller("homeController", ["$scope", "$location", "Property",
function($scope, $location, Property)
{
  console.log("homeController alive!");

  Property.find();

  $scope.$on("foundProperty", function(event, data)
  {
    console.log("propertyController on foundProperty: ", data);
    $scope.propertyData = data;
  });

  $scope.showPropertyDetail = function()
  {
      $location.url("fastigheter/" + this.property.post.slug);
  };

}]);
