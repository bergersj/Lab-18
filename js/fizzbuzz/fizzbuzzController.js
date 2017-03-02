var app = angular.module('myMod');

app.controller("fizzbuzzController", function($scope, fizzbuzzFactory ){

$scope.results = [];

  $scope.runFactory = function(inputNumber){
    // $scope.answer = fizzbuzzFactory.fizzbuzz(inputNumber);
    $scope.results.push(fizzbuzzFactory.fizzbuzz(inputNumber));
    console.log($scope.results);
    if (!$scope.display){
      $scope.display = !$scope.display;
    }else{

    };
 }
});
