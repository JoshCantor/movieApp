app.controller("Search", function($scope, $routeParams, $http) {
	$scope.message= "search";
	$scope.performSearch = function (query) {
		var searchUrl = "http://www.omdbapi.com/?s=" + $scope.query;

		var omdbQueryRequest = $http({
			method: "GET",
			url: searchUrl
		});

		omdbQueryRequest.then(function(data) {
			console.log(data);
		})
	}
});

app.controller("Movie", function($scope, $routeParams) {
	console.log("Movie");
});