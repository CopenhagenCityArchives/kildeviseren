angular.module('KSA_Bladr.directives').directive('dynaform', function($compile){
    return{
        //Only for elements
        restrict: 'E',
        //templateUrl: 'directives/dynaform.html',
        template: '',
        replace: true,
        scope: {
            filters: "="//,
            //filterChange: "&"
        },
        link: function(scope, element, attributes){
            //Watching the data filters attribute. If anything changes,
            //create the templates and compile them
            scope.$watch('filters', function(value) {
                if(value && value.length > 0){
                    createFilterTemplates();
                }
            });

            var createFilterTemplates = function(){
                var template = "";
                for(var i = 0; i < scope.filters.length; i++){
                 //   console.log('scope.filters[' + i + ']', scope.filters[i]);
                    //month.id as month.text for month in metadata.months
                    template = template +
                        '<div class="form-group">' +
                            '<select chosen disable-search="' + !scope.filters[i].searchable +'"' +
                            'data-placeholder="' + scope.filters[i].placeholder + '"' +
                            'no-results-text="\'' + scope.filters[i].noResultsText + '\'"' +
                            'ng-model="filters[' + i + '].filter_value"' +
                            'ng-options="value.text as value.text for value in filters[' + i + '].possibleValues"' +
                            'style="width:300px;">' +
                                '<option value=""></option>' +
                            '</select>' +
                            '<div class="qmark qmarktop" data-content="' + scope.filters[i].helpText + '">' +
                                '<img src="assets/img/qmark.png">' +
                            '</div>' +
                            '<div class="form_box_input_help input_help_top"></div>' +
                        '</div>';
                }


                element.html(template);
                //console.log('compiling this: ', element.contents());
                $compile(element.contents())(scope);
            };

            // console.log('Here is the scope of parent: ',scope);
            // console.log('Those are the attributes of parent: ',attributes);

        }
    };
});
