(function() {
    'use strict';

    angular
        .module('onlineBanking.onboarding')
        .directive('obRegisterDirective', obRegisterDirective);

    function obRegisterDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/onboarding/directives/registerDirective/registerDirective.html',
            scope: true,
            controllerAs: 'ctrl',
            controller: Controller
        };

        function Controller() {
            var ctrl = this;

        }
    }
})();