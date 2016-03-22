(function(){
	'use strict';

	angular.module('movieApp').factory("movieFactory", movieFactory);

	function movieFactory($http, $q){
		var results = {};
		var apiKey = "9a5b3e2d11dff5fb176597ae62feaf5b"

		results.getMovies = function(title){
			var defer = $q.defer();

			$http.get('https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&query='+title)
				.success(function(data){
					defer.resolve(data);
					console.log(data);
				}).error(function(err, status){
					defer.reject(err);
				});

				return defer.promise;
		}

		results.getInfo = function(id){
			var defer = $q.defer();

			$http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+apiKey)
				.success(function(data){
					defer.resolve(data);
					console.log("clicked");
				}).error(function(err, status){
					defer.reject(err);
					console.log("bad");
				});
				return defer.promise;
		}

		return results;
	}



	movieFactory.$inject = ['$http', '$q'];
})();