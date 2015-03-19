app.controller("propertyController", ["$scope", "$sce", "Posts", function($scope, $sce, Posts) {
  console.log("propertyController is alive!");

  Posts.get();

  $scope.$on("gotPostData", function(event, data) {
    console.log("propertyController on gotPostsData: ", data);
    $scope.propertyData = data;
  }
}]);
