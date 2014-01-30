
angular.module("bham.directives", [])

.directive('datepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
				element.datepicker({
                    dateFormat:'mm/dd/yy',
                    onSelect:function (date) {
                        scope.$apply(function () {
                            ngModelCtrl.$setViewValue(date);
                        });
                    }
                });            
        }
    };
})

.directive("togglemenuitem", function(){
	return {
		restrict: 'A',
		link : function (scope, element, attrs) {
				element.click(function(e){
					e.preventDefault();
					//Remove all CSS class from the left Navigation bar list items
					$(".bhamLeftBavBar li").removeClass('active');
					//Make the current list item active
					element.addClass('active');
				});
        }
	};
});
