app.factory("Menus", ["WPRest", function(WPRest)
	{
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
						callback : function()
						{
							
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