angular.module("bham.toolsandresourcesModule", [])

.config(['$routeProvider', function($routeProvider) {    
		'use strict';
		
		$routeProvider			
		.when('/toolsandresources', {				
				template: "<h3>Tools and Resources</h3>",				
			});				
}]);