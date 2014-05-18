//Retrieves the module KSA_Bladr.controllers, and adds a new controller
angular.module('KSA_Bladr.controllers').
    controller('ViserCtrl', function($scope, $location, $parse, BrowseService, MetadataManagerService, FormBuilderService){

        //browse model
        $scope.browse = {};
        $scope.browse.step = function(steps){
            BrowseService.step(steps);
            $scope.currentObject = BrowseService.getCurrentContent();
        };
        $scope.browse.currentObject = {};
        $scope.browse.currentStep = BrowseService.currentStep;
/*
	// Public Vars
	$scope.formFields = [{
		key: 'firstName',
		type: 'autocomplete',
		label: 'First Name',
		placeholder: 'Jane',
                searchParam: 'søgeparameter',
                ng_model: 'result',
                attr_placeholder:'type to search movies...',
                click_activation:'false',
                data:'movies',
                on_type:'doSomething',
                //options : [{on_type: 'doSomething'},{'attr_placeholder':'placeholder her'}, {optionsData : [{on_type: 'doSomething'},{'attr_placeholder':'placeholder her'}]}],
                optionsData : [{'attr_placeholder':'placeholder her'}],
                options : [{'attr_placeholder':'placeholder her'}]
	},{
		key: 'firstName',
		type: 'text',
		label: 'First Name',
		placeholder: 'Jane'
	}, {
		key: 'lastName',
		type: 'text',
		label: 'Last Name',
		placeholder: 'Doe'
	}, {
		key: 'email',
		type: 'email',
		placeholder: 'janedoe@gmail.com'
	}, {
		key: 'about',
		type: 'textarea',
		label: 'Tell me about yourself',
		placeholder: 'I like puppies',
		lines: 4
	}, {
		key: 'triedEmber',
		type: 'radio',
		label: 'Have you tried EmberJs yet?',
		default: 'no',
		options: [
			{
				name: 'Yes, and I love it!',
				value: 'yesyes'
			}, {
				name: 'Yes, but I\'m not a fan...',
				value: 'yesno'
			}, {
				name: 'Nope',
				value: 'no'
			}
		]
	}, {
		key: 'angularFan',
		type: 'text',
		label: 'Angular Fan?',
		disabled: true,
		default: 'yes',
		required: true
	}, {
		key: 'love',
		type: 'number',
		label: 'How much love?',
		default: 2,
		min: 0,
		max: 100,
		required: true
	}, {
		key: 'transportation',
		type: 'select',
		label: 'How do you get around in the city',
		options: [
			{
				name: 'Car',
				group: 'inefficiently'
			}, {
				name: 'Helicopter',
				group: 'inefficiently'
			}, {
				name: 'Sport Utility Vehicle',
				group: 'inefficiently'
			}, {
				name: 'Bicycle',
				group: 'efficiently'
			}, {
				name: 'Skateboard',
				group: 'efficiently'
			}, {
				name: 'Walk',
				group: 'efficiently'
			}, {
				name: 'Bus',
				group: 'efficiently'
			}, {
				name: 'Scooter',
				group: 'efficiently'
			}, {
				name: 'Train',
				group: 'efficiently'
			}, {
				name: 'Hot Air Baloon',
				group: 'efficiently'
			}
		]
	}, {
		key: 'password',
		type: 'password',
		label: 'Password'
	}, {
		key: 'checkThis',
		type: 'checkbox',
		label: 'Check this here'
	}, {
		key:'secretCode',
		type: 'hidden',
		default: 'secret_code'
	}];

	$scope.formOptions = {
		submitCopy: 'Vis'
	};
	$scope.submittedData = null;
	$scope.formData = {};       
        $scope.formFieldsStr = $scope.toPrettyJSON($scope.formFields, 4);
	$scope.formOptionsStr = $scope.toPrettyJSON($scope.formOptions, 4);
        
        // Public Methodsconcerning dynamic forms
        
	// Events
	$scope.$watch('formFieldsStr', function onOptionsUpdated(newValue, OldValue) {
		try {
			$scope.formFields = $parse(newValue)({});
			$scope.formFieldsError = false;
		} catch (e) {
			// eat $parse error
                        console.log('Formly Demo App Error: error parsing data, changes not applied');
		}
	});
	$scope.$watch('formOptionsStr', function onOptionsUpdated(newValue, OldValue) {
		try {
			$scope.formOptions = $parse(newValue)({});
		} catch (e) {
			// eat $parse error
                        console.log('Formly Demo App Error: error parsing data, changes not applied');
		}
	});
        $scope.doSomething = function doSomething(){
            console.log("success!");
        };
        $scope.searchParam = "";
        
	$scope.onSubmit = function onSubmit() {
		$scope.submittedData = $scope.formData;
	};
        $scope.sayHallo = function(){
            $scope.formFieldsStr = $scope.formFields;
        };
	// Private Methods
        $scope.toPrettyJSON = function(obj, tabWidth) {
		var strippedObj = angular.copy(obj);
		var result = JSON.stringify(strippedObj, null, Number(tabWidth));
		return result;
	};     
*/
    });