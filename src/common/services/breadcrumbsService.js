angular.module('bham.breadcrumbsModule', [])

.constant('menuItemsMap' ,{
			dashboard: 'Dashboard',
			caremanager: 'Care Manager',
            messagecenter: 'Message Center',
            organization: 'Organization Profile',
            patients: 'Patients List',
            visualanalytics: 'Visual analytics',
            reports: 'Reports',
            toolsandresources: 'Tools & Resources'
			
})

.factory('breadcrumbsService', ['$rootScope', '$location', 'menuItemsMap', function($rootScope, $location, menuItemsMap){

  var breadcrumbs = [];
  var breadcrumbsService = {};
  
  $rootScope.$on('$routeChangeSuccess', function(event, current){

    var pathElements = $location.path().split('/'), result = [], i;
    var breadcrumbPath = function (index) {
      return '/' + (pathElements.slice(0, index + 1)).join('/');
    };

    pathElements.shift();
    for (i=0; i<pathElements.length; i++) {
        var menuName = menuItemsMap[ pathElements[i]] || pathElements[i] ;
        //console.log(  pathElements[i] + ' - ' + menuName );
      result.push({name: menuName , path: breadcrumbPath(i)});
    }

    breadcrumbs = result;
  });

  breadcrumbsService.getAll = function() {	
    return breadcrumbs;
  };

  breadcrumbsService.getFirst = function() {
    return breadcrumbs[0] || {};
  };

  return breadcrumbsService;
}]);