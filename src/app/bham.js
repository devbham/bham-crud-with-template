

var bham = angular.module('bham', [
		'ngRoute',
		'bham.dashboarModule',
		'bham.caremanagerModule',
		'bham.organizationModule',
		'bham.patientModule',
		'bham.visualanalyticsModule',
		'bham.messagecenterModule',
		'bham.reportsModule',
		'bham.toolsandresourcesModule',
		'bham.directives'
])

.config(['$routeProvider', function($routeProvider) {    
		'use strict';
		
		$routeProvider			
			.otherwise({
				redirectTo: '/dashboard'
			});
}])
.controller('BhamCtrl', [ '$scope','$location', function($scope, $location){
	'use strict';
	
	$scope.redirect = function(path){
		$location.path(path);
	};	
	
	$scope.headnavbar = 'head-navbar.html';
	$scope.sidenavbar = 'side-navbar.html';
	$scope.breadcrums = 'breadcrums.html';
	
}]);
