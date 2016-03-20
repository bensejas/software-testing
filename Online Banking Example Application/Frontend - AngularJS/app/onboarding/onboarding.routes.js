(function() {
    'use strict';

    angular
        .module('onlineBanking.onboarding')
        .config(routes);


    function routes($stateProvider, $viewsProvider) {
        $stateProvider
            .state('onboarding', {
                url: '/?view',
                reloadOnSearch: false,
                views: {
                    header: $viewsProvider.onboardingHeaderComponent,
                    body: $viewsProvider.onboardingComponent
                }
            });
    }
})();
