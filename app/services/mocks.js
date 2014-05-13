'use strict';
var app = angular.module('KSA_Bladr');

// define our fake backend
app.run(function($httpBackend) {
    
    //Defining static data to serve
    var phones = [{name: 'phone1'}, {name: 'phone2'}];     
    
    //Defining responses
    $httpBackend.whenPOST('/phones').respond(function(method, url, data, headers){
        console.log('Received these data:', method, url, data, headers);
        phones.push(angular.fromJson(data));
        return [200, {}, {}];
    });
    
    $httpBackend.whenGET('/phones').respond(function(method,url,data) {
        console.log("Getting phones");
        return {test:true};
    });
    
    $httpBackend.whenGET('/type=collection&id=1').respond(phones);
});