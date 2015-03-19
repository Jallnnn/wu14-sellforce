app.controller("propertyController", ["$scope", "$sce", "Posts", function($scope, $sce, Posts) {
  console.log("propertyController is alive!");

  Posts.get();

  $scope.$on("gotPostData", function(event, data) {
    console.log("propertyController on gotPostsData: ", data);

    var title = '<h2>' + data[0].title + '</h2>';
    var content = data[0].content;

    $scope.trustedHtml = $sce.trustAsHtml(title + content);
  });
}]);
