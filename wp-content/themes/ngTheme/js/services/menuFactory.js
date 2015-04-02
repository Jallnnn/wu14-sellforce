app.factory("Menus", ["WPRest", function(WPRest)
	{
		function createMenuTree(menuData)
		{
			var menuTree = [];
			var hash = {};
			var menuItems = menuData.items;

			for(var i = 0; i < menuItems.length; i++)
			{
				menuItems[i].children = [];

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