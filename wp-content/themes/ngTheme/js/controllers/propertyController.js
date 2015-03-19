app.controller("propertyController", ["$scope", "Posts", function($scope, Posts)
{
  console.log("propertyController is alive!");

  Posts.get();

  $scope.$on("gotPostData", function(event, data)
  {
    console.log("propertyController on gotPostsData: ", data);
    $scope.propertyData = data;
  });
}]);