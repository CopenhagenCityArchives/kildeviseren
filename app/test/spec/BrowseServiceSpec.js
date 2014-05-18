
describe("Testing BrowseService", function(){
    //Browser represents the service
    var Browser;
  
    beforeEach(function(){
        //Retrieving the services namespace
        module('KSA_Bladr.services');
        
        //Injecting the injector, which is used to extract the registred service
        //from the module 'mainModule'
        inject(function($injector) {
            Browser = $injector.get('BrowseService');
        });
    });

    describe("Adding, getting and resetting content", function(){
        it("should add content", function(){
            Browser.resetContent();
            Browser.setContent([{some: "content"}]);
            expect(Browser.getContent().length).toBe(1);
        });
        
        it("should throw exception if input is not an array", function(){
            var insertTest = function(){
                Browser.resetContent();
                Browser.setContent({some: "content"});
            };
            expect(insertTest).toThrow();
            var insertText = function(){
                Browser.resetContent();
                Browser.setContent("test");
            };
            expect(insertText).toThrow();
        });
        
        it("should get content at a given position", function() {
            var testContent = [{some: "content1"},{some: "content2"},{some: "content3"},{some: "content4"}];
           Browser.setContent(testContent);
           Browser.step(2);
           expect(Browser.getCurrentContent()).toBe(testContent[2]);
        });
        
        it("should reset content", function() {
           Browser.resetContent();
           expect(Browser.getContent().length).toBe(0);
        });
        
        it("should return number of objects in content", function(){
            expect(Browser.contentLength()).toBe(0);
        });
    });
    
    describe("Stepping", function(){
       var content = [];
       
        //Adding content
        beforeEach(function(){
           Browser.resetContent();
           content = [];
           for(var i = 0; i<100; i++){
               var name = "page"+i.toString();
               var psudeoRandomId = i* 3;
               content.push({"name": name, "id":psudeoRandomId });
           }
            Browser.setContent(content);
        });
        
        it("should go to specific step when id is given", function(){
            Browser.currentStep = 0;
            Browser.goToId(6);
            expect(Browser.currentStep).toBe(2);
            
            Browser.currentStep = 0;
            Browser.goToId(2);
            expect(Browser.currentStep).toBe(0);            
        });
        
        it("should go to first step when id is not given", function(){
            Browser.currentStep = 4;
            Browser.goToId(9879);
            expect(Browser.currentStep).toBe(0);            
        });        
        
        it("should set currentStep to 0 by default", function(){
            expect(Browser.currentStep).toBe(0);
        });
        
        it("should set currentStep when numbers are positive and within range of content", function() {
            Browser.currentStep = 0;
            Browser.step(1);
            expect(Browser.currentStep).toBe(1);
            
            Browser.currentStep = 0;
            Browser.step(2);
            expect(Browser.currentStep).toBe(2);
            
            Browser.currentStep = 0;
            Browser.step(25);
            expect(Browser.currentStep).toBe(25);            
        });
        
        it("should set currentStep when numbers are positive and larger than range of content", function() {
           Browser.currentStep = 0;
           Browser.step(102);
           expect(Browser.currentStep).toBe(2);
           
           Browser.currentStep = 0;
           Browser.step(2102);
           expect(Browser.currentStep).toBe(2);
        });

        it("should set currentStep when numbers are negative and smaller than range of content", function(){
            Browser.currentStep = 0;
            Browser.step(-2102);
            expect(Browser.currentStep).toBe(98);

            Browser.currentStep = 0;
            Browser.step(-2);
            expect(Browser.currentStep).toBe(98);       
            
            Browser.currentStep = 25;
            Browser.step(-50);
            expect(Browser.currentStep).toBe(75);
        });        

        it("should set currentStep when using goToNext and goToPrevious", function(){
            Browser.currentStep = 0;
            Browser.goToNext();
            expect(Browser.currentStep).toBe(1);
            
            Browser.currentStep = 0;
            Browser.goToPrevious();
            expect(Browser.currentStep).toBe(99);      
            
            Browser.currentStep = 0;
            Browser.step(99);
            Browser.goToNext();
            expect(Browser.currentStep).toBe(0);            
        });
    });
});