

describe('BHAM', function() {
    'use strict';

    describe('Patients List', function() {
        
        beforeEach(function() {			
            browser.get('http://localhost:8087/bham-crud-with-template/src/#/patient');
			
        });

        it('should contain 5 patients', function() {            
            //Get the todo input field element
            // var todoInput = element(by.model('todoText'));
            // todoInput.clear();
            // todoInput.sendKeys('Integrate todo app in jenkins');
            
			console.log("before counting patients in list");
            browser.debugger();            
			browser.findElements(by.repeater('patient in patients')).then(function(arr){
                expect(arr.length).toEqual(5);
				console.log("There are: " + arr.length + " in list.");
            });			
            
        });
		
		it('should create a patient', function() {
			var addPatientBtn = element(by.name('addPatient'));			
			console.log("before clicking create patient button"); 
			browser.debugger();
			addPatientBtn.click();
        });
		
        describe('should delete a patient', function() {
            
        });

        describe('should edit a patient', function() {

        });
		
		

    });

});

