//"ngTheme" home controller.
//dependent on $scope && WPService being injected to run
app.controller("homeController", ["$scope", "Pages", "$sce", function($scope, Pages, $sce) {
  console.log("homeController alive!");
  //get all pages
  Pages.get();

  // EXAMPLE LISTENER TO A $broadcast COMING FROM WPRest SERVICE!!!
  //listening for the "gotPageData" broadcast on $http success
  $scope.$on("gotPageData", function(event, data) {
    console.log("homeController on gotPageData: ", data);
    console.log("gotPageData, the title: ", data[0].title);

    /*
      angular protects us from "dangerous" HTML by converting it to a string

      if we want to show HTML from a string in DOM
      we first need to tell angular that it can be trusted.

      this is done using the $sce service on the HTML string in JS
      and the ng-bind-html directive in the view
    */
    var title = '<h2>' + data[0].title + '</h2>';
    var content = data[0].content;

    $scope.trustedHtml = $sce.trustAsHtml(title + content);
  });

}]);
