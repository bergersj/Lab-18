var app = angular.module("myMod");

app.factory('yodaFactory', function($http) {

  $http({
    url: "https://yoda.p.mashape.com/yoda"
    data: {
      name: "bergersj",
      api_key: "mBGAHq4pJjmshqlSFqOni9EMV1hSp1W6hTbjsnhlF2LvIq5oKQ"
    }
  }, function(responseBody) { console.log(responseBody); });

});


https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.
