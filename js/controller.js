app.controller("Search", function($scope, $routeParams) {
	$scope.movieSearch = function(query) {
		("search/:query");
	}
});

app.controller("Movie", function($scope, $routeParams) {
	console.log("Movie");
});