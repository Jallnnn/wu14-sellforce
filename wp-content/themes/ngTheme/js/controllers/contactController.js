app.controller("contactController", ["$scope", "Pages", "$sce", "SITE_INFO",
function($scope, Pages, $sce, SITE_INFO)
{
	console.log("contactController alive!");
	$scope.partialsDir = SITE_INFO.partials;
}]);