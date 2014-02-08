'use strict';

angular.module('replaceproductApp', ['nvd3ChartDirectives', 'angular-momentjs'])
    .config(function($momentProvider){
        $momentProvider
            .asyncLoading(false)
            .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.3.1/moment.min.js');
    });;