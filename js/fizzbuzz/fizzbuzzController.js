var app = angular.module('myMod');

app.controller("fizzbuzzController", function($scope, fizzbuzzFactory ){


$scope.runFactory = function() {
   $scope.answer = fizzbuzzFactory.fizzbuzz($scope.inputNumber);
};

});
