

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
	
	$scope.showError = function(ngModelController, error) {
		return ngModelController.$error[error];
	};	

	$scope.headnavbar = 'head-navbar.html';
	$scope.sidenavbar = 'side-navbar.html';
	$scope.breadcrums = 'breadcrums.html';	
	
}]);
