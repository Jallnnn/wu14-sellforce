app.controller("aboutController", ["$scope", "Pages", "$sce",
function($scope, Pages, $sce)
{
	console.log("aboutController is alive!");
	Pages.get();
	$scope.$on("gotPageData", function(event, data)
	{
		console.log("pages: ", data);
		for (var i = 0; i < data.length; i++)
		{
			if (data[i].slug == "om-oss")
			{
				var pageHtml = "<h2>" + data[i].title + "</h2>" + data[i].content;
				$scope.trustedHtml = $sce.trustAsHtml(pageHtml);
			}
		}
	});
}]);
