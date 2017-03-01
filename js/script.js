var app = angular.module('myMod');

app.directive('header', function(){
  return {
    restrict: 'EA',
    templateUrl: 'partials/headerPartial.html',
    replace: false
  };
});

app.directive('footer', function(){
  return {
    restrict: 'EA',
    templateUrl: 'partials/footerPartial.html',
    replace: false
  };
});
