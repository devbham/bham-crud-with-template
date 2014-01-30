angular.module("bham.caremanagerModule", [])

.config(['$routeProvider', function($routeProvider) {    
		'use strict';
		
		$routeProvider			
		.when('/caremanager', {				
				template: "<h3>Care manager</h3>",				
			});				
}]);