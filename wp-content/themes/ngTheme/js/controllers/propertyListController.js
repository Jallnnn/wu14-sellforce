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

  
  $scope.propFilters = {
    priceRange : [] //always length === 2
   
  };

  $scope.filterReset = function() {
    $scope.propFilters = {
      priceRange : [] //always length === 2
     
    };
  };

  // $scope.resetPropTypeRange = function() {
  //   $scope.propFilters.typeRange = {
  //     Apartment : true,
  //     House : true,
  //     Townhouse : true
  //   };
  // };


  //Property.find() accepts an object with key->value pairs that
  //map to the search filters we need in our GET request
  //var pageNo = 1;
  Property.find($routeParams);

  //the interval for all carousels
  // $scope.carouselInterval = 5000;

  $scope.$on("foundProperty", function(event, data) {
    console.log("propertyController on foundProperty: ", data);
    $scope.propertyModels = data;

    //pageNo++;
    //Property.find($routeParams, pageNo);
  });

  //a simple $scope method for changing urls using ng-click in views
  $scope.goTo = function(url) {
    $location.url(url);
  };

}]);