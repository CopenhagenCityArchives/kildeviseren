
describe("Testing URLBuilderService", function(){
    //Browser represents the service
    var URLBuilder;
  
    beforeEach(function(){
        //Retrieving the services namespace
        module('KSA_Bladr.services');
        
        //Injecting the injector, which is used to extract the registred service
        //from the module 'mainModule'
        inject(function($injector) {
            URLBuilder = $injector.get('URLBuilderService');
        });
    });
    
    describe("initializing", function(){
        it('should not be null', function(){
            expect(URLBuilder).not.toBe(null);    
        });
    });
    
    describe("collection info", function(){
        it("should return false when collection id is null", function(){
            expect(URLBuilder.collectionInfoUrl(false)).toBe(false);
        });
        
        it("should return URL for collection info based on collection id", function(){
            
            var collectionId = 1;
            
            var expectedUrl = URLBuilder.remoteServerUrl + "getcollectioninfo/1?callback=JSON_CALLBACK";
            expect(URLBuilder.collectionInfoUrl(collectionId)).toBe(expectedUrl);           
        });
    });       
    
    describe("metadatalevels", function(){
        it("should return false when no collection id is given", function(){
            expect(URLBuilder.metadataLevelsUrl(false)).toBe(false);
        });
        
        it("should return URL for metadata levels based on collection id and name of metadatalevel (if any)", function(){
            
            var collectionId = 1;
            var metadataLevelName = "station";
            
            var expectedUrl = URLBuilder.remoteServerUrl + "getmetadatalevels/1?callback=JSON_CALLBACK";
            expect(URLBuilder.metadataLevelsUrl(collectionId)).toBe(expectedUrl);
            
            expectedUrl = URLBuilder.remoteServerUrl + "getmetadatalevels/1/station?callback=JSON_CALLBACK";
            expect(URLBuilder.metadataLevelsUrl(collectionId, metadataLevelName)).toBe(expectedUrl);
        });
    });
    
    describe("metadata", function(){
        it("should return false when collection id is null", function(){
            expect(URLBuilder.metadataUrl(false)).toBe(false);
        });
        
        it("should return URL for metadata based on collection id and filters in format {'name':'station','value':'1'}", function(){
            
            var collectionId = 1;
            var metadataLevel = "station";
            var parameters = [{"name":"station", "value":"3"},{"name":"roll", "value":"0049"}];
            
            var expectedUrl = URLBuilder.remoteServerUrl + "getmetadata/1?station=3&roll=0049&callback=JSON_CALLBACK";
            expect(URLBuilder.metadataUrl(collectionId, false, parameters)).toBe(expectedUrl);
            
            var expectedUrl = URLBuilder.remoteServerUrl + "getmetadata/1/station?station=3&roll=0049&callback=JSON_CALLBACK";
            expect(URLBuilder.metadataUrl(collectionId, metadataLevel, parameters)).toBe(expectedUrl);            
        });
    });    
    
    describe("objects", function(){
        it("should return false when collection id is null or parameters is not array", function(){
            expect(URLBuilder.objectsUrl(false)).toBe(false);
            expect(URLBuilder.objectsUrl(1, {"test":"test"})).toBe(false);
        });
        
        it("should return URL for objects based on collection id and filters in format {'name':'station','value':'1'}", function(){
            
            var collectionId = 1;
            var metadataLevel = "station";
            var parameters = [{"name":"station", "value":"3"},{"name":"roll", "value":"0049"}];
            
            var expectedUrl = URLBuilder.remoteServerUrl + "getobjects/1?station=3&roll=0049&callback=JSON_CALLBACK";
            expect(URLBuilder.objectsUrl(collectionId, false, parameters)).toBe(expectedUrl);
            
            var expectedUrl = URLBuilder.remoteServerUrl + "getobjects/1/station?station=3&roll=0049&callback=JSON_CALLBACK";
            expect(URLBuilder.objectsUrl(collectionId, metadataLevel, parameters)).toBe(expectedUrl);            
        });
    });      
});