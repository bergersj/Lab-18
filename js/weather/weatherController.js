var app = angular.module("myMod");

app.controller('weatherController', function($scope, weatherFactory){
  $scope.findWeather = function(inputCity, inputState){
    var userInputs = {
      city: inputCity,
      state: inputState
    };
    weatherFactory.getWeather(userInputs);
  }

  $scope.results = weatherFactory.pulledResults();
});

// app.controller('yodaController', function($scope, yodaFactory) {
//
//   $scope.text = {
//     speech: "",
//     yadaSpeech: ""
//   };
//
//   $scope.getYodaText = function(text) {
//      yodaFactory.yodaTalks(text).then(function(response){
//        $scope.text.yodaSpeech = response.data;
//      })
//   };
//
// });
