angular.module("movieApp").factory("searchBar", function() {
	var search = {};

	search.setQuery = function(query) {;
		search.query = query;
	}

	search.query = "";

	search.setMovies = function(movies) {
		search.movieList = movies;
	}

	search.movieList = [];

	return search;
});
