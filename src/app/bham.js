

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
		'bham.directives',
		'bham.breadcrumbsModule'
])


.config(['$routeProvider', function($routeProvider) {    
		'use strict';
		
		$routeProvider			
			.when('/', {				
				templateUrl: "app/patient/patient-list.tpl.html",
				controller: 'ListPatientCtrl'
			});				
}])

.controller('BhamCtrl', [ '$scope','$location','breadcrumbsService', function($scope, $location, breadcrumbsService){
	'use strict';
	
	$scope.breadcrumbs = function(){
			return	breadcrumbsService.getAll();
	};	
	
	$scope.redirect = function(path){
		$location.path(path);
	};	
	
	$scope.headnavbar = 'head-navbar.html';
	$scope.sidenavbar = 'side-navbar.html';
	$scope.breadcrums = 'breadcrums.html';
	
}]);
