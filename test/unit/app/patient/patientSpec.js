describe('PatientModule', function() {
 
  beforeEach(module('bham'));
  //beforeEach(module('bham.patientService'));
  beforeEach(module('bham.patientModule'));
    
  
  describe("ListPatientCtrl", function(){
	var scope, patientService, ctrl;
	 
	beforeEach(inject(function($rootScope, $controller, _PatientService_) {
	  scope = $rootScope.$new();
	  ctrl = $controller('ListPatientCtrl', {$scope: scope});
	  patientService = _PatientService_;
	  scope.patients = patientService.query(); 	
   }));
   
	it("Should delete a patient", function(){	    
		scope.delete(0);
		expect(scope.patients.length).toEqual(4);		
	});	
	
	it("Should contain 5 patients", function(){		    
		expect(scope.patients.length).toEqual(5);
	});	
  });
  
  describe("EditPatientCtrl", function(){
	it("Should get a patient", function(){
  
	});
	
	it("Should update patient detail", function(){
  
	});	
  });
  
  describe("CreatePatientCtrl", function(){
	it("Should create a patient", function(){
  
	});	
  });
  
});