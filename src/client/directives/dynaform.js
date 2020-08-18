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
        
        controller: function($scope, $timeout) {

            $scope.init = function() {

                let filterArray = [];
                let filter;

                //Create a list for each of the filters
                for (let i = 0; i < $scope.filters.length; i++) {
                    
                    filter = $scope.filters[i];

                    filter.possibleValues.forEach(value => {
                        filterArray.push(value.text);
                    });

                    var elem = angular.element('#filter-' + i + '-container');

                    accessibleAutocomplete({
                        element: elem[0],
                        id: 'filter-'+ i, // To match it to the existing <label>.
                        source: filterArray,
                        defaultValue: filter.filter_value,
                        displayMenu: 'overlay',
                        showAllValues: true,                       

                        tNoResults: () => 'Ingen resultater fundet',
                        tAssistiveHint: () => 'Filtrene kan navigeres med pilekasterne, og enter for at vælge. Filtrene indeholder nuværende værdier der kan slettes for at se alle tilgænglige værdier',
                        tStatusSelectedOption: (selectedOption, length, index) => `${selectedOption} ${index + 1} af ${length} er highlighted`,
                    })

                    filterArray = [];
                };

                $(".autocomplete__input").attr("tabindex", "-1");
                $(".qmark").attr("tabindex", "-1");
            }

            $timeout($scope.init);
             
        }

    }
}]);