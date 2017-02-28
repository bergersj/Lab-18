var app = angular.module("myMod");

app.controller('yodaController', function($scope, $http, yodaFactory) {

  $scope.runYoda = function() {
     $scope.yodaReply = yodaFactory.$http($scope.wordInput);
  };

});
