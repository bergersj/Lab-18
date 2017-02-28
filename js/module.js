var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/fizzbuzz', {
      controller: 'fizzbuzzController',
      templateUrl: 'fizzbuzz.html'
    })
    .when('/yoda', {
      controller: 'yodaController',
      templateUrl: 'yoda.html'
    })
    .otherwise({ redirectTo: '/' });
    $locationProvider.hashPrefix('');
});
