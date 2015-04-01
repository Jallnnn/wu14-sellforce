app.controller("propertyListController", ["$scope", "Property", "$routeParams", "$location",
  function ($scope, Property, $routeParams, $location) {
  console.log("propertyListController is alive! params: ", $routeParams);

  /*
    Just some notes for myself:

    $scope.propFilters = {
      priceRange : [1000, 1000000], //always length === 2
      
      }
    }
  */
  $scope.propFilters = {};
  $scope.propFilters.priceRange = [];
  $scope.propFilters.typeRange = {
    apartment : true,
    villa : true,
    yard : true,
    other :true,
    tomt : true,
    fritidshus : true
  };

  $scope.pricevalue = "10;300";
  $scope.options = {
    from: 10,
    to: 1000,
    step: 10,
    dimension: "tus SEK",
    scale: [10, '|', 250, '|', 500, '|' , 750, '|', 1000]
  };


  $scope.filterReset = function() {
    $scope.propFilters = {
      priceRange : [] //always length === 2
     
    };
    $scope.pricevalue = "10;300";
    $scope.propFilters.typeRange = {
    apartment : true,
    villa : true,
    yard : true,
    other :true,
    tomt : true,
    fritidshus : true
  };
   $scope.balkFilt="";
  };

  $scope.resetPropTypeRange = function() {
    $scope.propFilters.typeRange = {
      apartment : true,
      villa : true,
      yard : true,
      other :true,
      tomt : true,
      fritidshus : true
    };
  };


  //Property.find() accepts an object with key->value pairs that
  //map to the search filters we need in our GET request
  //var pageNo = 1;
  Property.find($routeParams);
  $scope.orderKey = "post.title";
  $scope.reverse = false;
  //the interval for all carousels
  // $scope.carouselInterval = 5000;

  $scope.$on("foundProperty", function(event, data) {
    console.log("propertyController on foundProperty: ", data);
    $scope.propertyModels = data;

    //pageNo++;
    //Property.find($routeParams, pageNo);
  });

  $scope.changeOrderBy = function(changeTo, reverse) {
    $scope.reverse = reverse !== undefined ? reverse : $scope.reverse;
    $scope.orderKey = changeTo;
  };

  //a simple $scope method for changing urls using ng-click in views
  $scope.goTo = function(url) {
    $location.url(url);
  };

}]);