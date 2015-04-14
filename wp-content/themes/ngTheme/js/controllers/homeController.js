//"ngTheme" home controller.
//dependent on $scope && WPService being injected to run
app.controller("homeController", ["$scope", "$location", "Property", "$routeParams", "META_VALUES",
function($scope, $location, Property, $routeParams, META_VALUES)
{
  console.log("homeController alive!");
  
  // console.log("meta ", META_VALUES);
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
    "Lägenhet" : true,
    "Villa" : true,
    "Gård" : true,
    "Övrigt" :true,
    "Tomt" : true,
    "Fritidshus" : true
  };

$scope.Areas=META_VALUES.lan;
$scope.areaFilt="";
console.log("Län :",$scope.Areas);

  $scope.pricevalue = "0;1000";
  $scope.options = {
    from: 0,
    to: 1000,
    step: 10,
    dimension: "K SEK",
    scale: [0, '|', 250, '|', 500, '|' , 750, '|', 1000]
  };


  $scope.filterReset = function() {
    $scope.propFilters = {
      priceRange : [] //always length === 2
     
    };
    $scope.pricevalue = "0;1000";
    $scope.propFilters.typeRange = {
    "Lägenhet" : true,
    "Villa" : true,
    "Gård" : true,
    "Övrigt" :true,
    "Tomt" : true,
    "Fritidshus" : true
  };
   $scope.balkFilt="";
   $scope.areaFilt="";
  };

  $scope.resetPropTypeRange = function() {
    $scope.propFilters.typeRange = {
      "Lägenhet" : true,
      "Villa" : true,
      "Gård" : true,
      "Övrigt" :true,
      "Tomt" : true,
      "Fritidshus" : true
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
