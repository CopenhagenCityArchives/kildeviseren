
describe("Testing FormBuilderService", function(){
    //FormBuilder represents the service
    var FormBuilder;
  
    beforeEach(function(){
        //Retrieving the services namespace
        module('KSA_Bladr.services');
        
        //Injecting the injector, which is used to extract the registred service
        //from the module 'mainModule'
        inject(function($injector) {
            FormBuilder = $injector.get('FormBuilderService');
        });
    });
    
    describe("initializing", function(){
        it('should not be null', function(){
            expect(FormBuilder).not.toBe(null);    
        });
    });
    
    describe("form building", function(){
        
        it("should output form elements based on metadata levels", function(){
            
            expect(FormBuilder.createFormData([])).toEqual(false);
            
            var inputLevels = [{"name":"navn", "description":"beskrivelse","type":"getallbyfilter", "data":[]}];
            var expectedOutput = [ { "name" : "navn", "caption" : "navn", "type" : "text", "options" : [  ], "eventListener" : "ng-change='myModule.filterChanged(navn)'" }, { "submit" : { "type" : "submit", "label" : "submit" } } ];
            
            expect(FormBuilder.createFormData(inputLevels)).toEqual(expectedOutput);
            
            
            inputLevels = [{"name":"navn", "description":"beskrivelse","type":"preset", "data":[{"id":1,"value":"value1"},{"id":2,"value":"value2"}]}];
            expectedOutput = [ { "name" : "navn", "caption" : "navn", "type" : "text", "options" : [{"id":1,"value":"value1"},{"id":2,"value":"value2"}], "eventListener" : "ng-change='myModule.filterChanged(navn)'" }, { "submit" : { "type" : "submit", "label" : "submit" } } ];
            
            expect(FormBuilder.createFormData(inputLevels)).toEqual(expectedOutput);            
            
            inputLevels = [{"name":"navn", "description":"beskrivelse","type":"autocomplete", "data":[]}];
            expectedOutput = [ { "name" : "navn", "caption" : "navn", "type" : "autocomplete", "options" : [  ], "eventListener" : "ng-change='myModule.filterChanged(navn)'", "minLength" : 3 }, { "submit" : { "type" : "submit", "label" : "submit" } } ];
            expect(FormBuilder.createFormData(inputLevels)).toEqual(expectedOutput);
        });
    });
});