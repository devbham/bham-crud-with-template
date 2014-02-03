
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
		scope: {},
		link : function (scope, element, attrs) {
				element.click(function(e){
					e.preventDefault();
					//Remove all CSS class from the left Navigation bar list items
					$(".bhamLeftBavBar li").removeClass('active');
					//Make the current list item active
					element.addClass('active');		
					//Redirecting
					$(location).attr('href',attrs.url);
				});				
        }
	};
})

.directive("deletedialog", function(){
    return {
        restrict: 'A',
        scope: {
            patientid:'@',
            ondelete:'&'
        },
        link : function (scope, element, attrs) {

            element.on('click', function(e){
                 e.preventDefault();

                $( "#dialog-confirm" ).removeClass('hide').dialog({
                    resizable: false,
                    modal: true,
                    //title: '<div class="widget-header"><h4 class="smaller"><i class="icon-warning-sign red"></i> Empty the recycle bin?</h4></div>',
                    title: '',
                    title_html: true,
                    buttons: [
                        {
                            html: "<i class='icon-trash bigger-110'></i>&nbsp; Delete patient",
                            "class" : "btn btn-danger btn-xs",
                            click: function() {
                                console.log("Patient ID from directive: " + scope.patientid)
                                scope.ondelete({patientId:scope.patientid});
                                $( this ).dialog( "close" );
                            }
                        }
                        ,
                        {
                            html: "<i class='icon-remove bigger-110'></i>&nbsp; Cancel",
                            "class" : "btn btn-xs",
                            click: function() {
                                $( this ).dialog( "close" );
                            }
                        }
                    ]
                });
            });
        }
    };
});
