angular.module('KSA_Bladr.directives').directive('dynaform', ['$compile', '$timeout', function($compile, $timeout){
    return{

        //Only for elements

        restrict: 'A',

        //templateUrl: 'directives/dynaform.html',

        templateUrl: 'dynaform-template.html',

        replace: true,

        scope: {
            filters: "="
        },
        
        controller: function($scope, $timeout) {

            $scope.init = function() {
                $(".qmark").attr("tabindex", "-1");
                $("#map").attr("tabindex", "3");

                for (var i = 0; i < $scope.filters.length; i++) {
                    setupFilterAutocomplete(i);
                    $('#filter-' + i).attr('tabindex', '-1')
                }
            }

            // Deep watch filters
            $scope.$watch(function(scope){return scope.filters;}, function(value, oldValue) {
                if(value == oldValue){ return; }

                // Compare every filter in new and old filters list. Reset filter values if possibleValues has changed
                for(let i = 0; i < value.length; i++){
                    if(!oldValue[i] || !angular.equals(value[i].possibleValues,oldValue[i].possibleValues)){
                        resetFilterValue(i);
                    }
                }
            }, true)

            function resetFilterValue(index) {
                angular.element('#filter-' + index + '-container').empty();
                $scope.filters[index].filter_value = "";
                setupFilterAutocomplete(index);
            }

            function setupFilterAutocomplete(index) {

                let elem = angular.element('#filter-' + index + '-container');

                let filterSource = [];
                $scope.filters[index].possibleValues.forEach(function(value) {
                    filterSource.push(value.text);
                });
                
                accessibleAutocomplete({
                    element: elem[0],
                    id: 'filter-'+ index, // To match it to the existing <label>.
                    source: filterSource,
                    defaultValue: $scope.filters[index].filter_value,
                    displayMenu: 'overlay',
                    showAllValues : true,
                    autoSelect: false,
                    confirmOnBlur: false,

                    tNoResults: () => 'Ingen resultater fundet',
                    tAssistiveHint: () => 'Filtrene kan navigeres med piletasterne, og enter for at vælge. Filtrene indeholder nuværende værdier der kan slettes for at se alle tilgænglige værdier',
                    tStatusSelectedOption: (selectedOption, length, index) => `${selectedOption} ${index + 1} af ${length} er highlighted`,
                    onConfirm: function(val) {
                        $scope.filters[index].filter_value = val;
                    }
                })
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