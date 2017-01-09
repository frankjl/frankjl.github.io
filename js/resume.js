var resume = angular.module('resume', [])
resume.controller('SkillsController', ['$scope', function($scope) {
	$scope.skills = [
       { title: 'AngularJS', rating: 5, domain: 'angular.js.org' },
       { title: 'D3.js', rating: 4, domain: 'd3js.org' },
       { title: 'Java, Java EE', rating: 5, domain: 'java.com' },
       { title: 'Spring Framework', rating: 5, domain: 'spring.io' },
       { title: 'Hibernate', rating: 5, domain: 'hibernate.org' },
       { title: 'Relational Databases', rating: 5, domain: 'mysql.com' },
       { title: 'Gradle', rating: 4, domain: 'gradle.org' },
       { title: 'Neo4j & TitanDB', rating: 4, domain: 'neo4j.com' },
       { title: 'ElasticSearch', rating: 4, domain: 'elasticsearch.co' },
       { title: 'HTML, CSS, JS', rating: 4, domain: 'mozilla.org' },
       { title: 'Ruby on Rails', rating: 3, domain: 'rubyonrails.org' },
       { title: 'Git', rating: 4, domain: 'git-scm.com' },
       { title: 'Jenkins', rating: 4, domain: 'jenkins.io' },
       { title: 'Cloud Architecture', rating: 3, icon: 'glyphicon glyphicon-cloud' },
       { title: 'Apache Spark', rating: 3, domain: 'spark.apache.org' },
       { title: 'NodeJS', rating: 4, domain: 'nodejs.org' },
       { title: 'Maven', rating: 4.5, domain: 'maven.apache.org' },
       { title: 'Docker', rating: 4, domain: 'docker.com' },
       { title: 'Amazon Web Services', rating: 4, domain: 'aws.amazon.com' },
       { title: 'Linux', rating: 5, domain: 'centos.org' },
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
