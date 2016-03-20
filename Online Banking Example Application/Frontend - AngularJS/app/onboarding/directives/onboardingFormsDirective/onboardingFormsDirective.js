(function() {
    'use strict';

    angular
        .module('onlineBanking.onboarding')
        .directive('obOnboardingFormsDirective', obOnboardingFormsDirective);

    function obOnboardingFormsDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/onboarding/directives/onboardingFormsDirective/onboardingFormsDirective.html',
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