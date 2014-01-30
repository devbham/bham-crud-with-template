

var bham = angular.module('bham', [
		'ngRoute',	
		'bham.patientModule',
		'bham.directives'
])

.controller('BhamCtrl', [ '$scope','$location', function($scope, $location){
	'use strict';
	
	$scope.redirect = function(path){
		$location.path(path);
	};	
	
	$scope.headnavbar = 'head-navbar.html';
	$scope.sidenavbar = 'side-navbar.html';
	$scope.breadcrums = 'breadcrums.html';	
	
}]);
