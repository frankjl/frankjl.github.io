import angular from 'angular';

export default function starChart() {
	return {
		restrict: 'EA',
		scope: {
			stars: '=stars',
			label: '=label'
		},
		link: function($scope, $element, $attrs) {
			var starChart = angular.element('<div class="star-chart" style="min-width: 66px;"></div>');

			$element.append(starChart);

			$scope.$watch('stars', function() {
				for (var i = 0; i < Math.floor($scope.stars); i++) {
					starChart.append('<i class="fa fa-star" aria-hidden="true"></i>');
				}
				if (Math.ceil($scope.stars) > $scope.stars) {
					starChart.append('<i class="fa fa-star-half" aria-hidden="true"></i>');
				}
        for (var i = 0; i < 5 - Math.ceil($scope.stars); i++) {
					starChart.append('<i class="fa fa-star" aria-hidden="true" style="opacity: 0;"></i>');
				}
			})
		}
	}
};
