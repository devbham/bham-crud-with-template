

angular.module('bham.patientModule', ['bham.patientService'])

.config(['$routeProvider', function($routeProvider) {    
		'use strict';
		//$locationProvider.html5Mode(true);
		//var baseUrl = "bham-crud-with-template/src/";
		
		$routeProvider
			.when('/patient', {				
				templateUrl: "app/patient/patient-list.tpl.html",
				controller: 'ListPatientCtrl'
			})			
			.when('/patient/create', {
				templateUrl: "app/patient/patient-create.tpl.html",
				controller: 'CreatePatientCtrl'
			})			
			.when('/patient/delete/:id', {
				templateUrl: "app/patient/patient-list.tpl.html",
				controller: 'DeletePatientCtrl'
			})
			.when('/patient/edit/:id', {
				templateUrl: "app/patient/patient-edit.tpl.html",
				controller: 'EditPatientCtrl'				
			})
			.otherwise({
				redirectTo: '/patient'
			});

}])

.controller('ListPatientCtrl', ['$scope','$location','PatientService', function($scope, $location,PatientService){		
		'use strict';
		$scope.patients = PatientService.query();
		
		$scope.delete = function(patientId){		
			var ok = confirm("Do you want to delete this patient?");
			if( (typeof patientId != 'undefined')  && ok){
				var patient = $scope.patients[patientId];
				PatientService.delete(patientId);
				$location.path('#/patient');
				//$scope.redirect('/patient');
				console.log('Patient : ' + patient.firstName + ' ' + patient.lastName + ' deleted.');
			}else if((typeof patientId == 'undefined') || !ok ){
				console.log("Patient not deleted.");
			}	
		};
}])

.controller('EditPatientCtrl', ['$scope', '$routeParams','$location','PatientService', function($scope, $routeParams, $location, PatientService){				
		'use strict';
		$scope.patient = PatientService.get($routeParams.id);	
		
		$scope.update = function(id, patient){
			PatientService.update(id, patient);			
			$scope.redirect('/patient');
		};		
}])

.controller('CreatePatientCtrl', ['$scope', '$routeParams','$location', 'PatientService', function($scope, $routeParams, $location, PatientService){				
		$scope.add = function(patient){
			PatientService.add(patient);			
			$scope.redirect('/patient');
		};
}]);


