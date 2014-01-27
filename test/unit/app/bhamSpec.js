describe('BhamModule', function() {
  var scope, ctrl, location;
    
  beforeEach(module('bham'));
  //beforeEach(module('bham.patientModule'));
  
  beforeEach(inject(function($rootScope, $controller, $location) {
	  scope = $rootScope.$new();
	  ctrl = $controller('BhamCtrl', {$scope: scope});
	  location = $location;
   }));
   
  describe("BhamCtrl", function(){
	it("should redirect", function(){
	    scope.redirect('/patient');
		expect(location.path()).toEqual('/patient');
	})	
  });
     
});