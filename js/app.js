angular.module('MngNodesApp', ['MngNodesApp.controllers', 'MngNodesApp.services','ngRoute'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'partials/nodes.html', 
			controller: 'nodesController'
		})
		.when('/downNode/:node*', {
			templateUrl: 'partials/nodes.html', 
			controller: 'downNodeController'
		})
		.when('/leaveNode/:node*', {
			templateUrl: 'partials/nodes.html', 
			controller: 'leaveNodeController'
		})
		.when('/upNode/:node*', {
			templateUrl: 'partials/nodes.html', 
			controller: 'upNodeController'
		})
		.when('/joinNode/:node*', {
			templateUrl: 'partials/nodes.html', 
			controller: 'joinNodeController'
		});
}]);
