app.controller("Search", function($scope, $rootScope, $routeParams, $http, $location) {
	$scope.movies = $rootScope.movies;
	$rootScope.query = $scope.query; 

	$scope.performSearch = function (query) {
		var searchUrl = "http://www.omdbapi.com/?s=" + query;

		var omdbQueryRequest = $http({
			method: "GET",
			url: searchUrl
		});

		omdbQueryRequest.then(function(data) {
			var rawData = data.data.Search;
			rawData.forEach(function(movie) {
				if(movie.Poster === "N/A") {
					movie.Poster = "http://cdn.browshot.com/static/images/not-found.png"
				}
			});
			debugger;
			$rootScope.movies = rawData;
			$location.path('search');
			$location.search({ search: query });
		})
	}

	$scope.movieRedirect = function(id) {
		$location.path('/movie/' + id);

	}
});

app.controller("Movie", function($scope, $routeParams, $rootScope, $location) {
	$scope.movieBack = function() {
		$location.path("search");
		$location.search({ search: $routeParams.search });
	}
});