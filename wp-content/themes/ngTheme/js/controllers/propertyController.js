app.controller("propertyController", ["$scope", "$sce", "Posts", function($scope, $sce, Posts) {
  console.log("propertyController is alive!");

  Posts.get();

  $scope.$on("gotPostsData", function(event, data) {
    console.log("propertyController on gotPostsData: ", data[0].title);
  });
}]);
