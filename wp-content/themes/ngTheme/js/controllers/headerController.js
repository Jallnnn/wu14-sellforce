//"ngTheme" controller.
app.controller("headerController", ["Menus", "$scope", "$location", "SITE_INFO",
	function(Menus, $scope, $location, SITE_INFO)
	{
		console.log("headerController is alive!");
		console.log("SITE_INFO: ", SITE_INFO);

		console.log("Menus.get(): ", Menus.get(3));

		$scope.menuLinks = {};


	}]);