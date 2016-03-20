(function() {
    'use strict';

    angular
        .module('onlineBanking.onboarding')
        .directive('obOnboardingTabsDirective', obOnboardingTabsDirective);

    function obOnboardingTabsDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/onboarding/directives/onboardingTabsDirective/onboardingTabsDirective.html',
            scope: true,
            controllerAs: 'ctrl',
            controller: Controller
        };

        function Controller($scope, $stateParams) {
            var ctrl = this;

            $scope.$stateParams = $stateParams;
        }
    }
})();