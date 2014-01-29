

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

	// $scope.addCssclass  = function(){
		// alert("Ok")
	// }

	$scope.headnavbar = 'head-navbar.html';
	$scope.sidenavbar = 'side-navbar.html';
	$scope.breadcrums = 'breadcrums.html';	
	
}])

.directive("selectMenu", function(){
	return {
		restrict: 'A',
		link : function (scope, element, attrs) {
				element.bind('click', function(e){
					alert("ok");
					e.preventDefault();
					element.addClass('active');
				});
				
				//element.addClass('active');
				// angular.element( '.navbar' ).addClass( 'active' );
        }
	};
});
