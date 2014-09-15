//Instantiating namespaces and their dependencies
angular.module('KSA_Bladr.services',[]);
angular.module('KSA_Bladr.controllers',[]);
angular.module('KSA_Bladr.mocks', ['ngMockE2E']);

angular.module('KSA_Bladr', [
  'KSA_Bladr.controllers',
  'KSA_Bladr.services',
  'ui.bootstrap'
]);