
describe("Testing Navigation controller", function(){
    var $scope;
    var ctrl;
    var browse;
    
    beforeEach(function(){
        //Retrieving the controller module
        module('KSA_Bladr.controllers');
        module('KSA_Bladr.services');

        //Resetting all variables
        $scope, ctrl, browse = null;
        
        //Injecting services needed to create the controller
        inject(function($controller, $rootScope, $injector){
            browse = $injector.get('BrowseService');
            $scope = $rootScope.$new();
            //Creates a new controller with the needed services
            ctrl = $controller('NavigationCtrl', {$scope: $scope, BrowseService: browse});
        });
    });
    
    xdescribe("Initializing the controller", function(){
       it("should not be null", function(){
            expect($scope).not.toBe(null);
            expect(ctrl).not.toBe(null);
            expect($scope.welcomeText).toBe("Hallo!");
       });
    });
});