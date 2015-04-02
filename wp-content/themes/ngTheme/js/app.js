//app declaration and dependency injection
var app = angular.module("ngTheme", ["ngRoute", "ui.bootstrap", "ngSlider"]);
//app config
app.config(["$routeProvider", "$locationProvider", "SITE_INFO",
function($routeProvider, $locationProvider, SITE_INFO)
{
  //route config
  $routeProvider
    .when("/",
    {
      templateUrl: SITE_INFO.partials+"views/home.html",
      controller: "homeController"
    })
    .when("/fastigheter/:name",
    {
      templateUrl: SITE_INFO.partials+"views/property.html",
      controller: "propertyController"
    })
    .when("/sida/:name",
    {
      templateUrl: SITE_INFO.partials+"views/page.html",
      controller: "pageController"
    })
    .when("/vara-maklare",
    {
      templateUrl: SITE_INFO.partials+"views/contact.html",
      controller: "contactController"
    })
    .when("/om-oss",
    {
      templateUrl: SITE_INFO.partials+"views/about.html",
      controller: "aboutController"
    })
     .when("/search", {
      templateUrl: SITE_INFO.partials+"views/propertyList.html",
      controller: "propertyListController"
    })
    .otherwise(
    {
      redirectTo: "/"
    });
    //.otherwise(
    //{
    //  redirectTo: "/"
    //});

  $locationProvider.html5Mode(true);
}])
.constant('SITE_INFO', myLocalized)
.constant('API_ROUTE', "wp-json")
.constant('META_VALUES', metaValues); //new constant "META_VALUES"

