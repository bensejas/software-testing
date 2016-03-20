(function() {
    'use strict';

    angular
        .module('onlineBanking.onboarding')
        .controller('OnboardingComponentCtrl', OnboardingComponentCtrl);

    function OnboardingComponentCtrl($scope, $stateParams) {
        $scope.$stateParams = $stateParams;
    }
})();