var resume = angular.module('resume', [])
resume.controller('SkillsController', ['$scope', function($scope) {
	$scope.skills = [
       { title: 'AngularJS', rating: 4 },
       { title: 'D3.js', rating: 4 },
       { title: 'Java EE', rating: 5 },
       { title: 'Spring Framework', rating: 5 },
       { title: 'Hibernate', rating: 4 },
       { title: 'MySQL', rating: 5 },
       { title: 'Graph Databases', rating: 4 },
       { title: 'HTML, CSS, JS', rating: 4 },
       { title: 'Git', rating: 4 },
	   { title: 'Jenkins', rating: 4 },
       { title: 'Gradle & Maven', rating: 4 },
       { title: 'Cloud Architecture', rating: 4 },		
    ]
}])
resume.directive('starChart', function() {
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
			})
		}
	}
});