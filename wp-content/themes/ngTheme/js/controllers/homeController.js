//"ngTheme" home controller.
//dependent on $scope && WPService being injected to run
app.controller("homeController", ["$scope", "$location", "PropertyFactory",
function($scope, $location, PropertyFactory)
{
  console.log("homeController alive!");

  PropertyFactory.get();

  $scope.$on("gotPropertyData", function(event, data)
  {
    console.log("propertyController on gotPostsData: ", data);
    $scope.propertyData = data;
  });

  $scope.showPropertyDetail = function(detailTitle, detailLink)
  {
    // alert below not needed anymore, but it served us well.
    // alert("Going to show " + detailTitle + ". With link: " + detailLink);

    // split the url with / , and then pass the [4]'th to the url,
    // wich is the page itself. - Milo 
    var dLink = detailLink.split("/");
    $location.url(dLink[4]);
  };



  //get all pages
  // Pages.get();

  // EXAMPLE LISTENER TO A $broadcast COMING FROM WPRest SERVICE!!!
  //listening for the "gotPageData" broadcast on $http success
  // $scope.$on("gotPageData", function(event, data) {
  //   console.log("homeController on gotPageData: ", data);
  //   console.log("gotPageData, the title: ", data[0].title);


  //     angular protects us from "dangerous" HTML by converting it to a string

  //     if we want to show HTML from a string in DOM
  //     we first need to tell angular that it can be trusted.

  //     this is done using the $sce service on the HTML string in JS
  //     and the ng-bind-html directive in the view

  //   var title = '<h2>' + data[0].title + '</h2>';
  //   var content = data[0].content;

  //   $scope.trustedHtml = $sce.trustAsHtml(title + content);
  // });

}]);
