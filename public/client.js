var newsApp = angular.module('newsApp' , ['ngResource' , 'ngRoute']);

newsApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/templates/home',
			controller: 'homeController'
		})
		.when('/view/:id', {
			templateUrl: '/templates/view',
			controller: 'viewController'
		});
});


newsApp.factory('News' , function($resource){
	var model = $resource(
		'api/news/:id',
		{id: '@_id'}
		);
	return {
		model: model,
		items: model.query()
	};
});

//controllers

newsApp.controller('homeController', function(){});

newsApp.controller('viewController', function($routeParams, $scope, News){
	$scope.item = News.model.get({_id: $routeParams.id});
});

newsApp.controller('listController', function($scope, News){
	$scope.news = News.items;
});

newsApp.controller('newItemController', function($scope, News){
	$scope.item = {};
	$scope.addItem = function() {
		var newItem = new News.model($scope.item);
		newItem.$save(function(savedItem){
			var modelItem = new News.model(savedItem);
			News.items.push(modelItem);
		});
	};
});

//Directive
newsApp.directive('newsitem', function(){
	return {
		restrict: 'E',
		templateUrl: '/templates/newsItem'
	};
});
