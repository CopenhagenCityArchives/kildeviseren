angular.module('KSA_Bladr.directives').directive('dynaform', ['$compile', '$timeout', function($compile, $timeout){
    return{

        //Only for elements

        restrict: 'A',

        //templateUrl: 'directives/dynaform.html',

        templateUrl: 'dynaform-template.html',

        replace: true,

        scope: {

            filters: "="//,

            //filterChange: "&"

        },

        link: function(scope, element, attributes){

            //Watching the data filters attribute. If anything changes,

            //create the templates and compile them

            scope.$watch('filters', function(value) {
                console.log("link");
                if(value && value.length > 0){
                   
                    //scope.createFilters();

                }

            });
        },
        
        controller: function($scope, $timeout) {

            $scope.init = function() {
                $(".autocomplete__input").attr("tabindex", "-1");
                $(".qmark").attr("tabindex", "-1");

                for (var i = 0; i < $scope.filters.length; i++) {
                    setupFilterAutocomplete(i);
                }
            }

            $scope.$watch('filters', function(value) {
                console.log("hit");
                if(value && value.length > 0){
                }
            })

            function resetFilterValue(index) {
                angular.element('#filter-' + index + '-container').empty();
                $scope.filters[index].filter_value = "";
                setupFilterAutocomplete(index);
            }

            function setupFilterAutocomplete(index) {
                let filter = $scope.filters[index];
                let elem = angular.element('#filter-' + index + '-container');
                let filterSource = [];
                filter.possibleValues.forEach(function(value) {
                    filterSource.push(value.text);
                });

                console.log('Setting up filter',index,'source',filter,filterSource);

                accessibleAutocomplete({
                    element: elem[0],
                    id: 'filter-'+ index, // To match it to the existing <label>.
                    source: filterSource,
                    defaultValue: filter.filter_value,
                    displayMenu: 'overlay',
                    showAllValues : true,    
                    autoSelect: false,
                    confirmOnBlur: false,             

                    tNoResults: () => 'Ingen resultater fundet',
                    tAssistiveHint: () => 'Filtrene kan navigeres med pilekasterne, og enter for at vælge. Filtrene indeholder nuværende værdier der kan slettes for at se alle tilgænglige værdier',
                    tStatusSelectedOption: (selectedOption, length, index) => `${selectedOption} ${index + 1} af ${length} er highlighted`,
                    onConfirm: function(val) {
                        filter.filter_value = val;
                        for (var i = index + 1; i < $scope.filters.length; i++) {
                            resetFilterValue(i);
                        }
                    }
                })
            }

            $scope.createFilters = function() {
                let filterArray = [];
                let filter;

                //Create a list for each of the filters
                for (let i = 0; i < $scope.filters.length; i++) {
                    
                    filter = $scope.filters[i];

                    filter.possibleValues.forEach(value => {
                        filterArray.push(value.text);
                    });

                    var elem = angular.element('#filter-' + i + '-container');
                    console.log("elem", elem, elem[0]);
                    accessibleAutocomplete({
                        element: elem[0],
                        id: 'filter-'+ i, // To match it to the existing <label>.
                        source: filterArray,
                        defaultValue: filter.filter_value,
                        displayMenu: 'overlay',
                        showAllValues : true,    
                        autoSelect: false,
                        confirmOnBlur: true,             

                        tNoResults: () => 'Ingen resultater fundet',
                        tAssistiveHint: () => 'Filtrene kan navigeres med pilekasterne, og enter for at vælge. Filtrene indeholder nuværende værdier der kan slettes for at se alle tilgænglige værdier',
                        tStatusSelectedOption: (selectedOption, length, index) => `${selectedOption} ${index + 1} af ${length} er highlighted`,
                    })

                    filterArray = [];
                };
            }

            $scope.showAllValues = function(id) {
                if ($('#filter-'+id).val() != ''){
                    savedValue = $('#filter-'+id).val();
                }
                $('#filter-'+id).val('');
                $('#filter'+id).off('blur');
                $('#filter-'+id).on('blur', function() {
                    $('#filter-'+id).off('blur');
                    if (!$('#filter-'+id).val()) {
                        $('#filter-'+id).val(savedValue);
                        setTimeout(function() {
                            var focused = $(':focus');
                            $('#filter-'+id+'__listbox').find('li').first().click();
                            focused.focus();
                        });
                    }
                });
            }

            $timeout($scope.init);
             
        }

    }
}]);