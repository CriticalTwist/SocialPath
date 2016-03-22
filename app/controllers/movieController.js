(function(){
	'use strict';

	angular.module('movieApp').controller("movieController", movieController);

	function movieController(movieFactory, $scope){
		$scope.movies = {};
		$scope.movieDetail = {};

		$scope.getMovies = function(){
			movieFactory.getMovies($scope.movieName).then(function(data){
				$scope.movies = data;
				$scope.movieDetail = {};
				console.log($scope.movies);
			}, function(error){
				$scope.movies = {};
			});
		}

		$scope.getInfo = function(id){
			movieFactory.getInfo(id).then(function(data){
				$scope.movieDetail = data;
				$scope.movies = {};
				console.log($scope.movieDetail);
			}), function(error){
				$scope.movies = {};
				console.log("bad");
			}
		}
	}

	movieController.$inject = ['movieFactory', '$scope']
})();