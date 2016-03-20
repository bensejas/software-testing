(function() {
    'use strict';

    angular
        .module('onlineBanking.onboarding')
        .directive('obLoginDirective', obLoginDirective);

    function obLoginDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/onboarding/directives/loginDirective/loginDirective.html',
            scope: true,
            controllerAs: 'ctrl',
            controller: Controller
        };

        function Controller() {
            var ctrl = this;

        }
    }
})();