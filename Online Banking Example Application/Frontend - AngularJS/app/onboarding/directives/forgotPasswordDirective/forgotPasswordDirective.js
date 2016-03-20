(function() {
    'use strict';

    angular
        .module('onlineBanking.onboarding')
        .directive('obForgotPasswordDirective', obForgotPasswordDirective);

    function obForgotPasswordDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/onboarding/directives/forgotPasswordDirective/forgotPasswordDirective.html',
            scope: true,
            controllerAs: 'ctrl',
            controller: Controller
        };

        function Controller() {
            var ctrl = this;

        }
    }
})();