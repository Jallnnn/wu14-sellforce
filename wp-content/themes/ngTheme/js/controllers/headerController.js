//"ngTheme" controller.
app.controller("headerController", ["Menus", "$scope", "$location", "SITE_INFO",
function(Menus, $scope, $location, SITE_INFO)
{
	console.log("headerController is alive!");
	console.log("SITE_INFO: ", SITE_INFO);

	// console.log("Menus.get(): ", Menus.get(3));

	Menus.get(3);
	$scope.$on("gotMenuLinks", function(event, data)
	{
		$scope.menuLinks = data;
		console.log("menuLinks.items: ", $scope.menuLinks.items);
	});
}]);