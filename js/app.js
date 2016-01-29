var app = angular.module("movieApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/#/', {
		templateUrl: "",
		controller: "Search"
	}).when('/search/:query', {
		templateUrl: "partials/search.html",
		controller: "Search"
	}).when('/movie/:id', {
		templateUrl: "partials/movie.html",
		controller: "Movie"
	}).otherwise({
		redirectTo: "/"
	});
});