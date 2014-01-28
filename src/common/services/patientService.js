

angular.module('bham.patientService', ['ngResource'])

.factory('PatientService', ['$resource', function($resource){
	
    var patients = [
		{  MRN:123456, firstName:'Tomson', lastName:'Ngassa', DOB:'01/11/1990', gender:'Male', race:"African", SSN:123456789},
		{  MRN:123456, firstName:'Himalay', lastName:'Majumdar', DOB:'01/11/1990', gender:'Male', race:"Asian", SSN:123456789},
		{  MRN:123456, firstName:'Utish', lastName:'Rajkarnikar', DOB:'01/11/1990', gender:'Male', race:"Asian", SSN:123456789},
		{  MRN:123456, firstName:'Tao',lastName:'Lin',DOB:'01/11/1990',gender:'Male', race:"Asian", SSN:123456789},
		{  MRN:123456, firstName:'Joel',lastName:'Amoussou',DOB:'01/11/1990',gender:'Male', race:"African", SSN:123456789}
    ];
	
	return {
      query: function() { 
				return patients;
			},
      add : function(patient) {	
                patient.id = patients.length;
				return patients.push(patient);
			},
      get : function(id) { 
				return patients[id];
			},
      update : function(id, patient) {
				patients[id] = patient;
			},
       delete : function(id) {
			patients.splice(id,1);
			}		
    };
}]);