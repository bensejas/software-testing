(function() {
    'use strict';

    angular
        .module('onlineBanking.core')
        .config(routes);


    function routes($locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        $locationProvider.html5Mode(true);
        $urlMatcherFactoryProvider.strictMode(false);
        $urlRouterProvider.otherwise('/');

    }
})();
