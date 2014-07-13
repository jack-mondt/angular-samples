(function() {
    var app = angular.module("app", []);

    app.directive('ngSparkline', function() {
      return {
        restrict: 'A',
        template: '<div class="sparkline">&nbsp;Sparkline&nbsp;</div>'
      }
    });
})();
