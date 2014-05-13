
describe("Testing MetadataManagerService", function(){
    //Metadatafilter represents the service
    var MetadataManager;
  
    beforeEach(function(){
        //Retrieving services namespace
        module('KSA_Bladr.services');
        
        //Injecting the injector, which is used to extract the registred service
        //from the module 'mainModule'
        inject(function($injector) {
            MetadataManager = $injector.get('MetadataManagerService');
            MetadataManager.$inject = ['httpBackend'];
        });
    });
    
    describe("Initialization", function(){
        it("should not be null", function(){
            expect(MetadataManager).not.toBe(null);
        });
        
        it("should have empty collection id, levels and metadatatype", function(){
            expect(MetadataManager.collection_id).toBe(null);
            expect(MetadataManager.levels).toEqual([]);
            expect(MetadataManager.metadataType).toBe(null);
        });       
    });
    
    describe("Handling metadata filters", function(){
       it("should throw exception if necessary values not given, otherwise add filter", function(){
           
           MetadataManager.levels =  [{"order":2, "name":"station", "filter_value" : "1"},{"order":1, "name":"roll", "filter_value" : "2"}];
           
           var testFunc = function(){
               MetadataManager.addFilter({"station":"1"});
           };
           
           expect(testFunc).toThrow();
           
           
           MetadataManager.addFilter({"name":"station", "value":"1"});
           expect(MetadataManager.levels[0]['filter_value']).toEqual("1"); 
       });
       
       it("should remove a given filter if it exists", function(){
            var givenFilter = {"name":"station", "value":"1"};
            var ungivenFilter = {"name":"foo", "value":"bar"};
            
            MetadataManager.levels =  [{"order":2, "name":"station"},{"order":1, "name":"roll"}];
            
            MetadataManager.addFilter(givenFilter);
            
            MetadataManager.removeFilter(ungivenFilter);
            
            expect(MetadataManager.levels[0]['filter_value']).toEqual('1');
            
            MetadataManager.removeFilter(givenFilter);
            expect(MetadataManager.levels[0]['filter_value']).toBe(null);
       });
    });
    
    describe("Handling metadata levels", function(){
        
        var metadataLevelsResponse = {"levels" : [{"order":2},{"order":1}]};
        var metatadataLevelsResponseSorted = [{"order":1},{"order":2}];       
        
        it("should sort metadata levels by order", function(){
            MetadataManager.loadAndOrderLevels(metadataLevelsResponse);
            expect(MetadataManager.levels).toEqual(metatadataLevelsResponseSorted);
        });
        
        it("should check if metadata should be loaded", function(){
            expect(MetadataManager.doRefreshMetadata([],"lastRequest","lastRequest")).toEqual(true);
            expect(MetadataManager.doRefreshMetadata([{"contains":"data"}],"lastRequest","newRequest")).toEqual(true);
            expect(MetadataManager.doRefreshMetadata([],"lastRequest","newRequest")).toEqual(true)
            expect(MetadataManager.doRefreshMetadata([{"contains":"data"}],"lastRequest","lastRequest")).toEqual(false);
        });
        
        it("should check if all required filters is set", function(){
            MetadataManager.levels = [{"filter_required": true, "filter_value": 2}, {"filter_required": false, "filter_value": 2}];
            expect(MetadataManager.canRetrieveImages()).toEqual(true);
            
            MetadataManager.levels = [{"filter_required": true, "filter_value": 2}, {"filter_required": true, "filter_value": ""}];
            expect(MetadataManager.canRetrieveImages()).toEqual(false);      
            
            MetadataManager.levels = [{"filter_required": false, "filter_value": 2}, {"filter_required": false, "filter_value": ""}];
            expect(MetadataManager.canRetrieveImages()).toEqual(true);              
        });        
    });
    
    describe("Clearing of metadata", function(){
        
        beforeEach(function(){
            MetadataManager.levels = [{"type":"preset", "data":[1,2,4]},{"type":"getallbyfilter", "data":[1,2,4]},{"type":"typeahead", "data":[1,2,3]}];
        });
        
        it("should clear metadata for types getallbyfilter and preset for all levels when no level is given", function(){
            MetadataManager.clearMetadata();
            expect(MetadataManager.levels).toEqual([{"type":"preset", "data":[]},{"type":"getallbyfilter", "data":[]},{"type":"typeahead", "data":[1,2,3]}]);
        });   
        
        it("should clear metadata for types getallbyfilter and preset for levels on and under the given", function(){
            MetadataManager.clearMetadata(0);
            expect(MetadataManager.levels).toEqual([{"type":"preset", "data":[]},{"type":"getallbyfilter", "data":[]},{"type":"typeahead", "data":[1,2,3]}]);
        });   
        
        it("should clear metadata for types getallbyfilter and preset for levels on and under the given", function(){
            MetadataManager.clearMetadata(1);
            expect(MetadataManager.levels).toEqual([{"type":"preset", "data":[1,2,4]},{"type":"getallbyfilter", "data":[]},{"type":"typeahead", "data":[1,2,3]}]);            
        });   
    });    
});