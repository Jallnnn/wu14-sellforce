app.factory("Menus", ["WPRest", "SITE_INFO",
function(WPRest, SITE_INFO)
{

	function createMenuTree(menuData)
	{
		var menuTree = [];
		var hash = {};
		var menuItems = menuData.items;

		menuItems.sort(function(x, y) {
			return x.order > y.order;
		});

		for(var i = 0; i < menuItems.length; i++)
		{
			menuItems[i].children = [];
			menuItems[i].url = menuItems[i].url.replace(SITE_INFO.http_root, "/");
			if (
				menuItems[i].url.indexOf("vara-maklare") < 0 &&
				menuItems[i].url != "/"
				) {
				menuItems[i].url = "/sidor" + menuItems[i].url;
			}

			hash["_" + menuItems[i].ID] = menuItems[i];

			if(menuItems[i].parent === 0)
			{
				menuTree.push(menuItems[i]);
			}
		}

		for(var i in hash)
		{
			var menuLink = hash[i];
			if(!menuLink.parent)
			{
				continue;
			}
			hash["_" + menuLink.parent].children.push(menuLink);
		}
		return menuTree;
	}

	var menuServant =
	{
		get : function(menuID)
		{
			var callURL;
			var broadcastInstructions;
			if (menuID)
			{
				callURL = "/menus/" + menuID;

				broadcastInstructions =
				{
					broadcastName : "gotMenuLinks",
					callback : function(data)
					{
						return createMenuTree(data);
					}
				};
			}
			else
			{
				callURL = "/menus/";
				broadcastInstructions = "gotMenus";
			}

			WPRest.restCall(callURL, "GET", {}, broadcastInstructions);
		}
	};

	return menuServant;
}]);