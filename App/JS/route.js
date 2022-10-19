var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Partials/index.html"
        })
        .when("/hata", {
            templateUrl: "Partials/hata.html"
        })
        .when("/hakkimda",{
            templateUrl: "App\Partials\hakkimda.html"
        })
        .when("/yazilar",{
            templateUrl: "App\Partials\yazilar.html"
        })
        .when("/tarifler",{
            templateUrl: "App\Partials\tarifler.html"
        })
        .when("/iletisim",{
            templateUrl: "App\Partials\iletisim.html"
        })
        .when("/hizmetler",{
            templateUrl: "App\Partials\hizmetler.html"
        })
        .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);


    //$mdGestureProvider.skipClickHijack();

}]);
myApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }]);