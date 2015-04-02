app.controller("pageController", ["$scope", "Pages", "$sce", "$routeParams",
function($scope, Pages, $sce, $routeParams)
{
	console.log("pageController is alive!");
	Pages.find($routeParams);

	$scope.$on("foundPages", function(event, data)
	{
		console.log("page: ", data);
		$scope.pageData = data[0];
		var pageContent = data[0].content;
		$scope.trustedHtml = $sce.trustAsHtml(pageContent);
	});
}]);