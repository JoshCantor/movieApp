app.controller("Search", function($scope, $routeParams, $http, $location, searchBar) {
	$scope.searchBar = searchBar;
	
	$scope.performSearch = function (query) {
		searchBar.setQuery($scope.query);
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

			searchBar.setMovies(rawData);
			$location.path('search');
			$location.search({ search: query });
		})
	}

	$scope.movieRedirect = function(id) {
		$location.path('/movie/' + id);
		$location.search({});

	}
});

app.controller("Movie", function($scope, $routeParams, $location, searchBar, $http) {

	$scope.searchBar = searchBar;
	$scope.movieBack = function() {
		$location.path("search");
		$location.search({ search: searchBar.query });
	}

	function getMovieData(id) {
		var movieUrl = "http://www.omdbapi.com/?i=" + id;

		var omdbMovieRequest = $http({
			method: "GET",
			url: movieUrl
		});

		omdbMovieRequest.then(function(movieData) {
			$scope.movie = movieData.data;
			console.log($scope.movie);
			if ($scope.movie.Poster === "N/A") {
				$scope.movie.Poster = "http://cdn.browshot.com/static/images/not-found.png"; 
			}
		});
	}


	getMovieData($routeParams.id)

});