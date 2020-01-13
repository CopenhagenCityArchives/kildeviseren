
describe("Testing MetadataFilterService", function(){
    //Metadatafilter represents the service
    var MetadataFilter;
  
    beforeEach(function(){
        //Retrieving services namespace
        angular.mock.module('KSA_Bladr.services');
        
        //Injecting the injector, which is used to extract the registred service
        //from the module 'mainModule'
        inject(function($injector) {
            MetadataFilter = $injector.get('MetadataFilterService');
            MetadataFilter.$inject = ['httpBackend'];
        });
    });
    
    describe("Initialization", function(){
        it("should have empty metadatalist", function(){
            expect(MetadataFilter.levels).toEqual([]);
            expect(MetadataFilter.metadataType).toEqual(null);
        });
        
        it("should have collection id of -1", function(){
            expect(MetadataFilter.collection_id).toBe(null);
        });       
    });
    
    describe("Setting the metadata configuration", function(){
        it("should create a ordered list of metadatalevels and have the appropriate type", function(){

            var setEmptyMetadata = function(){
                confObj = {};
                MetadataFilter.setMetadataConfiguration(confObj);
            };
            
            expect(setEmptyMetadata).toThrow();
            
            var setCorrectMetadata = function(){
                confObj = {};
                confObj.levels = [{"order":1, "name":"Station", "api_name":"station"},{"order":1, "name":"Filmrulle", "api_name":"roll"}];
                confObj.metadataType = "hierarchy";
                MetadataFilter.setMetadataConfiguration(confObj);
            };
            
            expect(setCorrectMetadata).not.toThrow();
            expect(MetadataFilter.levels).toEqual([{"order":1, "name":"Station", "api_name":"station"},{"order":1, "name":"Filmrulle", "api_name":"roll"}]);
            expect(MetadataFilter.metadataType).toEqual("hierarchy");
        });
    });
    
    describe("Handling metadata filters", function(){
       it("should throw exception if necessary values not given, otherwise add filter", function(){
           
           MetadataFilter.levels =  [{"order":2, "api_name":"station"},{"order":1, "api_name":"roll"}];
           
           var testFunc = function(){
               MetadataFilter.addFilter({"station":"1"});
           };
           
           expect(testFunc).toThrow();
           
           
           MetadataFilter.addFilter({"name":"station", "value":"1"});
           expect(MetadataFilter.levels[0]['filter_value']).toBe("1"); 
       });
       
       it("should remove a given filter if it exists", function(){
            var givenFilter = {"name":"station", "value":"1"};
            var ungivenFilter = {"name":"foo", "value":"bar"};
            
            MetadataFilter.levels =  [{"order":2, "api_name":"station"},{"order":1, "api_name":"roll"}];
            
            MetadataFilter.addFilter(givenFilter);
            
            MetadataFilter.removeFilter(ungivenFilter);
            
            expect(MetadataFilter.levels[0]['filter_value']).toEqual('1');
            
            MetadataFilter.removeFilter(givenFilter);
            expect(MetadataFilter.levels[0]['filter_value']).toBe(null);
       });
       
       it("should compare filters regardless of order", function(){
           var filters1 = [{"name":"station", "value":"1"},{"name":"foo", "value":"bar"}];
           var filters2 = [{"name":"foo", "value":"bar"},{"name":"station", "value":"1"}];
           var filters3 = [{"name":"test", "value":"1"}];
           
           expect(MetadataFilter.compareFilters(filters1, filters2)).toEqual(true);
           expect(MetadataFilter.compareFilters(filters1,filters1)).toEqual(true);
           expect(MetadataFilter.compareFilters(filters1, filters3)).toEqual(false);           
           expect(MetadataFilter.compareFilters(filters1, [])).toEqual(false);
       });
       
       it("should not handle undefined inputs", function(){
           var filters1 = null;
           var filters2 = undefined;
           expect(MetadataFilter.compareFilters(filters1, filters1)).toEqual(true);
           expect(MetadataFilter.compareFilters(filters2, filters2)).toEqual(true);
           expect(MetadataFilter.compareFilters(filters1, filters2)).toEqual(true);
           expect(MetadataFilter.compareFilters(filters2, filters1)).toEqual(true);
       });
    });
    
    describe("Metadata retrieval from backend", function(){
        var $httpBackend;
        //var serverLocation = "http://www.politietsregisterblade.dk/api/1?";
        //Reuseable data mocks
        var metadataLevelsResponse = {"type":"hierarchy","levels":[{"order":2, "name":"Filmrulle", "api_name":"roll", "data":[]},{"order":1, "name":"Station", "api_name":"station", "data":[]}]};
        var metatadataLevelsResponseSorted = [{"order":1, "name":"Station", "api_name":"station", "data":[]},{"order":2, "name":"Filmrulle", "api_name":"roll", "data":[]}];        
        var metadataLevelsWithRequest = [{"order":1, "name":"Station", "api_name":"station", "data": [], "filter_value" : "1"},{"order":2, "name":"Filmrulle", "api_name":"roll", "data": [{"name":"0001", "id":"1"},{"name":"0002","id":2}], "latest_request" : 'collection=1&station=1&level=roll'}];
        var metadataLevelsEmptyRequest = [{"order":1, "name":"Station", "api_name":"station", "data" : []},{"order":2, "name":"Filmrulle", "api_name":"roll", "data": [{"name":"0001", "id":"1"},{"name":"0002","id":2}]}];

        var levelsWithSubLevelData = [{"order":1, "name":"Station", "api_name":"station", "data" : [], "filter_required" : true},{"order":2, "name":"Filmrulle", "api_name":"roll", "data": [{"name":"0001", "id":"1"},{"name":"0002","id":2}], "latest_request" : 'collection=1&station=1&level=roll', "filter_required" : true}];
        var levelsWithNoSubLevelData = [{"order":1, "name":"Station", "api_name":"station", "data" : [], "filter_value" : "1", "filter_required" : true},{"order":2, "name":"Filmrulle", "api_name":"roll", "data": [], "latest_request" : "collection=1&station=1&level=roll", "filter_required" : true}];        
        
        var metadataDataResponse = [{"name":"0001", "id":"1"},{"name":"0002","id":2}];
        
        beforeEach(inject(function($injector) {
            // Set up the mock http service responses
            $httpBackend = $injector.get('$httpBackend');
            
            $httpBackend.when('GET', 'type=metadatalevels&collection=1').respond(metadataLevelsResponse);
            
            MetadataFilter.getMetadataLevels(1); 
            $httpBackend.expectGET('type=metadatalevels&collection=1');
            $httpBackend.flush();
        }));
       
        it("should retrieve metadata levels and type from a given collection, sorting by 'order'", function(){
            expect(MetadataFilter.levels).toEqual(metatadataLevelsResponseSorted);
            expect(MetadataFilter.type).toEqual("hierarchy");
        });
        
        xit("should retrive and set metadata", function(){
           $httpBackend.when('GET', 'collection=1&station=1&level=roll').respond(metadataDataResponse);
           
           MetadataFilter.addFilter({"name":"collection", "value":"1"});
           MetadataFilter.addFilter({"name": "station", "value": "1"});
           console.log(MetadataFilter.levels[2]);
           MetadataFilter.getMetadata("roll"); 
           $httpBackend.expectGET('collection=1&station=1&level=roll');
           
           $httpBackend.flush();
        console.log(MetadataFilter.levels[2]);
           expect(MetadataFilter.levels[1]).toEqual({"order":2, "name":"Filmrulle", "api_name":"roll", "data":[]});
        });
        
        it("should not retrieve metadata if the latest request matches the current, otherwise the data should be refreshed", function(){
            $httpBackend.when('GET', 'collection=1&station=1&level=roll').respond(metadataDataResponse);
            
            MetadataFilter.addFilter({"name": "station", "value": "1"});
            MetadataFilter.getMetadata("roll"); 
            $httpBackend.expectGET('collection=1&station=1&level=roll');            
            $httpBackend.flush();
            expect(MetadataFilter.levels).toEqual(metadataLevelsWithRequest);
            
            //This function should create a pending request if it's not working correctly
            MetadataFilter.getMetadata("roll"); 
            
            //(thats why there is no flush here...)
        });        
        
        it("should clean lower levels if type is 'hierarchy'", function(){
            MetadataFilter.levels = levelsWithSubLevelData;
            MetadataFilter.metadataType = 'hierarchy';
            
            MetadataFilter.addFilter({"name":"collection", "value":"1"});
            MetadataFilter.addFilter({"name": "station", "value": "1"});
            
            MetadataFilter.getMetadata("roll");
            expect(MetadataFilter.levels).toEqual(levelsWithNoSubLevelData); 
        });
        
        it("should not clean lower levels if type is 'flat'", function(){
            MetadataFilter.levels = levelsWithSubLevelData;
            MetadataFilter.metadataType = 'flat';
            
            MetadataFilter.addFilter({"name":"collection", "value":"1"});
            MetadataFilter.addFilter({"name": "station", "value": "1"});
            
            MetadataFilter.getMetadata("roll");
            expect(MetadataFilter.levels).toEqual(levelsWithSubLevelData);
        });
        
        it("should enable search for image when al required filters is set", function(){
            MetadataFilter.levels = levelsWithNoSubLevelData;
            MetadataFilter.metadataType = 'flat';
            
            //Not adding enough filters to perform the required search
            MetadataFilter.addFilter({"name":"collection", "value":"1"});
            
            expect(MetadataFilter.canRetriveImages()).toBe(false);
            
            //Adding the missing filters
            MetadataFilter.addFilter({"name":"station", "value":"1"});
            MetadataFilter.addFilter({"name":"roll", "value":"1"});
            
            expect(MetadataFilter.canRetriveImages()).toBe(true);
            
            //Removing a required filter
            MetadataFilter.removeFilter({"name":"roll", "value":"1"});
            
            expect(MetadataFilter.canRetriveImages()).toBe(false);
        });
       
       afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
       });
    });
    
    describe("loading image collections", function(){
        var metadataLevels = {"type":"hierarchy","levels":[{"order":1, "name":"Station", "api_name":"station", "data":[], "filter_required": true},{"order":2, "name":"Filmrulle", "api_name":"roll", "data":[], "filter_required" : true}]};
        
        it("should generate a requestURL based on all filters", function(){
            MetadataFilter.levels = metadataLevels.levels;
            MetadataFilter.addFilter({"name":"station", "value":"1"});
            MetadataFilter.addFilter({"name":"roll", "value":"43"});
            expect(MetadataFilter.getImageCollectionRequestURL()).toEqual("getImageCollections?collection=1&station=1&roll=43");        
        });
        
        it("should return false if required filters is not set", function(){
            MetadataFilter.levels = metadataLevels.levels;
            //Removing a required filter
            MetadataFilter.removeFilter({"name":"station", "value":"1"});
            expect(MetadataFilter.getImageCollectionRequestURL()).toBe(false);            
        });
    });
});