
var myApp=angular.module('myApp', ['ngRoute','ngResource','ui.bootstrap']);
function TwitterCtrl($scope,$resource){
}
myApp.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider
        .when("/anasayfa", {
            templateUrl: "App/Partials/anasayfa.html"
        })
        .when("/hata", {
            templateUrl: "App/Partials/hata.html"
        })
        .when("/hakkimda",{
            templateUrl: "App/Partials/hakkimda.html"
        })
        .when("/yazilar",{
            templateUrl: "App/Partials/yazilar.html"
        })
        .when("/tarifler",{
            templateUrl: "App/Partials/tarifler.html"
        })
        .when("/iletisim",{
            templateUrl: "App/Partials/iletisim.html"
        })
        .when("/hizmetler",{
            templateUrl: "App/Partials/hizmetler.html"
        })
        .otherwise({ redirectTo: '/' });
    


    //$mdGestureProvider.skipClickHijack();

}]);

console.log("içerdeyim");

(function(app){
  "use strict";
  app.controller("MainController", function($scope, $http){
    $http.get('App/data.json').then(function(prd){
      $scope.prd = prd.data;
    });
  });
})(myApp);
// myApp.controller('tarifController',function($scope){
//     $scope.showModal=false;
//     $scope.buttonClicked = "";
//     $scope.toggleModal = function(btnClicked){
//         $scope.buttonClicked=btnClicked;
//         $scope.showModal=!$scope.showModal;

//     };
    


// });
// myApp.directive('modal',function(){
//     return {
//         template: '<div class="modal fade">' + 
//             '<div class="modal-dialog">' + 
//               '<div class="modal-content">' + 
//                 '<div class="modal-header">' + 
//                   '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
//                   '<h4 class="modal-title">{{ buttonClicked }} clicked!!</h4>' + 
//                 '</div>' + 
//                 '<div class="modal-body" ng-transclude></div>' + 
//               '</div>' + 
//             '</div>' + 
//           '</div>',
//         restrict: 'E',
//         transclude: true,
//         replace:true,
//         scope:true,
//         link: function postLink(scope, element, attrs) {
//             scope.$watch(attrs.visible, function(value){
//             if(value == true)
//               $(element).modal('show');
//             else
//               $(element).modal('hide');
//           });
  
//           $(element).on('shown.bs.modal', function(){
//             scope.$apply(function(){
//               scope.$parent[attrs.visible] = true;
//             });
//           });
  
//           $(element).on('hidden.bs.modal', function(){
//             scope.$apply(function(){
//               scope.$parent[attrs.visible] = false;
//             });
//           });
//         }
//       };
//       var a="baby";
//     });
myApp.controller('tarifController',function($scope,$http,$routeProvider,$uibModal){

    $scope.showPopup = function(){	
					
        user = {'first_name':'JON','last_name':'Smith','address':'Ny'};
        $scope.modalInstance = $uibModal.open({
               ariaLabelledBy: 'modal-title',
               ariaDescribedBy: 'modal-body',
               templateUrl: 'view.html',
               controller :'ModelHandlerController',
               controllerAs: '$ctrl',
               size: 'lg',
               resolve: {
                    user: function(){
                          return user;
                       }
                  }
             });
             
      }
});
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


// // function keyPress(e){
//     if(e.key=="Escape"){
//         if(e.keyCode==27){
//             document.querySelector('footer-button').click(); 
//         }
        
//     }
// }


