(function() {
    'use strict';

    angular
        .module('onlineBanking.core')
        .provider('$views', provider);


    function provider() {
        var $views = this;

        $views.onboardingComponent = {
            controller: 'OnboardingComponentCtrl as ctrl',
            templateUrl: '/app/onboarding/components/onboardingComponent/onboardingComponent.html'
        };
        $views.onboardingHeaderComponent = {
            controller: 'OnboardingHeaderComponentCtrl as ctrl',
            templateUrl: '/app/onboarding/components/onboardingHeaderComponent/onboardingHeaderComponent.html'
        };


        $views.$get = function () {
            return $views;
        };
    }
})();