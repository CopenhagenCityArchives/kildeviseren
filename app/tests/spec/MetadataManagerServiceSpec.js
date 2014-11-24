
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
           
           MetadataManager.levels =  [{"order":2, "name":"station"},{"order":1, "name":"roll"}];
           
           var testFunc = function(){
               MetadataManager.addFilter({"station":"1"});
           };
           
           expect(testFunc).toThrow();
           
           
           MetadataManager.addFilter({"name":"station", "value":"1"});
           expect(MetadataManager.levels[0]['filter_value']).toEqual("1"); 
       });
       
       it("should not add filters with empty values", function(){
           
           MetadataManager.levels =  [{"order":2, "name":"station", "filter_value": ""},{"order":1, "name":"roll", "filter_value" : null}];

           expect(MetadataManager.getFilters()).toEqual([]); 
       });       
       
       it("should remove a given filter if it exists", function(){
            var givenFilter = {"name":"station", "value":"1"};
   
            MetadataManager.levels =  [{"order":2, "name":"station"},{"order":1, "name":"roll"}];
            
            MetadataManager.addFilter(givenFilter);
            
            MetadataManager.removeFilter("foo");
            
            expect(MetadataManager.levels[0]['filter_value']).toEqual('1');
            
            MetadataManager.removeFilter("station");
            expect(MetadataManager.levels[0]['filter_value']).toBe(null);
       });
       
       it("should return an array of filters", function(){
            var givenFilter = {"name":"station", "value":"1"};
            var givenFilter2 = {"name":"roll", "value":"2"};
            
            MetadataManager.levels =  [{"order":2, "name":"station"},{"order":1, "name":"roll"}];
            
            MetadataManager.addFilter(givenFilter);
            MetadataManager.addFilter(givenFilter2);
            var filters = [{"name":"station","value":"1"},{"name":"roll","value":"2"}];
            expect(MetadataManager.getFilters()).toEqual(filters);
       });       
    });
    
    describe("String representation of metadata", function(){
        it("should convert an array of metadata names and values to a human readable string", function(){
            var metadata = {station:1,roll:23};
            MetadataManager.levels = [{order: 1, name: "station", gui_name: "Station"},{order: 2, name: "roll", gui_name: "Filmrulle"}];
            expect(MetadataManager.getMetadataString(metadata)).toEqual("Station 1, filmrulle 23");
            
            metadata = {station:1,roll:23};
            MetadataManager.levels = [{order: 1, name: "station", gui_name: "Station"},{order: 2, name: "roll", gui_name: "Filmrulle", hideInMetadataString: true}];
            expect(MetadataManager.getMetadataString(metadata)).toEqual("Station 1, 23");            
        });
        it("should return empty string when no input is given", function(){
            var metadata = null;
            MetadataManager.levels = [{order: 1, name: "station", gui_name: "Station"},{order: 2, name: "roll", gui_name: "Filmrulle"}];
            expect(MetadataManager.getMetadataString(metadata)).toEqual("");
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
            MetadataManager.levels = [{"required": true, "filter_value": 2}, {"required": false, "filter_value": 2}];
            expect(MetadataManager.canRetrieveObjects()).toEqual(true);
            
            MetadataManager.levels = [{"required": true, "filter_value": 2}, {"required": true, "filter_value": ""}];
            expect(MetadataManager.canRetrieveObjects()).toEqual(false);      
            
            MetadataManager.levels = [{"required": false, "filter_value": 2}, {"required": false, "filter_value": ""}];
            expect(MetadataManager.canRetrieveObjects()).toEqual(true);              
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