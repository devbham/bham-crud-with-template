angular.module("bham.dashboarModule", [])

.config(['$routeProvider', function($routeProvider) {    
		'use strict';
		
		$routeProvider			
		.when('/dashboard', {				
				template: "<h3>Dashboard</h3>",				
			});				
}]);