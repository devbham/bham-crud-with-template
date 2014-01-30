

angular.module('bham.patientModule', ['bham.patientService'])

.value( 'patientList','#/patients')

.config(['$routeProvider', function($routeProvider) {    
		'use strict';
		
		$routeProvider
			.when('/patients', {				
				templateUrl: "app/patient/patient-list.tpl.html",
				controller: 'ListPatientCtrl'
			})			
			.when('/patients/create', {
				templateUrl: "app/patient/patient-create.tpl.html",
				controller: 'CreatePatientCtrl'
			})			
			.when('/patients/delete/:id', {
				templateUrl: "app/patient/patient-list.tpl.html",
				controller: 'DeletePatientCtrl'
			})
			.when('/patients/edit/:id', {
				templateUrl: "app/patient/patient-edit.tpl.html",
				controller: 'EditPatientCtrl'
			})
			.otherwise({
				redirectTo: '/patients'
			});
}])

.controller('ListPatientCtrl', ['$scope','$location','PatientService', 'patientList', function($scope, $location,PatientService, patientList){		
		'use strict';		
		// var data = PatientService.query();
		// var data = PatientService.query();
		// console.log(data);
		$scope.patients = PatientService.query();
		
		$scope.delete = function(patientId){
			var ok = confirm("Do you want to delete this patient?");
			if( (typeof patientId != 'undefined')  && ok){
				var patient = $scope.patients[patientId];
				PatientService.delete(patientId);
				$location.path(patientList);
				console.log('Patient : ' + patient.firstName + ' ' + patient.lastName + ' deleted.');
			}else if((typeof patientId == 'undefined') || !ok ){
				console.log("Patient not deleted.");
			}	
		};
}])

.controller('EditPatientCtrl', ['$scope', '$routeParams','$location','PatientService', 'patientList', function($scope, $routeParams, $location, PatientService, patientList){				
		'use strict';
		$scope.patient = PatientService.get($routeParams.id);
		
		$scope.update = function(id, patient){
			PatientService.update(id, patient);
			$location.path(patientList);
		};		
}])

.controller('CreatePatientCtrl', ['$scope', '$routeParams','$location', 'PatientService', 'patientList', function($scope, $routeParams, $location, PatientService, patientList){				
		'use strict';
		$scope.add = function(patient){
			PatientService.add(patient);
			$location.path(patientList);
		};
	
}]);


