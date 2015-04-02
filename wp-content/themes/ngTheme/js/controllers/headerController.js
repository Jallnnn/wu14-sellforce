//"ngTheme" controller.
app.controller("headerController", ["Menus", "$scope", "$location", "SITE_INFO",
function(Menus, $scope, $location, SITE_INFO)
{
	console.log("headerController is alive!");
	console.log("SITE_INFO: ", SITE_INFO);

  $scope.partialsDir = SITE_INFO.partials;

	// console.log("Menus.get(): ", Menus.get(3));

	Menus.get(3);
	$scope.$on("gotMenuLinks", function(event, data)
	{
		$scope.menuLinks = data;
		console.log("menuLinks.items: ", $scope.menuLinks.items);
	});

  $scope.searchText = "";

  $scope.searchFor = function(searchText) {
    var locationUrl = "/search";
    if (searchText) {
      locationUrl += "?s=" + searchText;
    }

    console.log("Searching: ", locationUrl);
    $scope.goTo(locationUrl);
  };


  $scope.goTo = function(url, hardReload) {
    //any relative path destined for hardReload 
    //gets http_root instead of initial "/"
    if (hardReload) {
      url = url.indexOf("/") === 0 ?
        SITE_INFO.http_root + url.substr(1) :
        SITE_INFO.http_root + url;
    }

    if (hardReload) {
      //hard reloads use traditional JS window.location.href 
      //to change url
      window.location.href = url;
      return;
    }

    //all "soft" reloads (location change within app) use
    //angulars $location.url() to change url using push/pop-state
    $location.url(url);
  };
	
}]);