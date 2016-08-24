var resume = angular.module('resume', [])
resume.controller('ExperienceController', ['$scope', function($scope) {
	$scope.skills = [
       { title: 'AngularJS', rating: 4 },
       { title: 'D3.js', rating: 4 },
       { title: 'Java EE', rating: 5 },
       { title: 'MySQL', rating: 5 },
       { title: 'Graph Databases', rating: 4 },
       { title: 'CSS', rating: 4 },
       { title: 'Git', rating: 4 },
       { title: 'Leadership', rating: 5 },
	   { title: 'Mentoring', rating: 4 },
	   { title: 'Problem Solving', rating: 5 },
    ]
}])
resume.directive('arcChart', function() {
	return {
		restrict: 'EA',
		scope: {
			start: '=start',
			end: '=end',
			total: '=total'
		},
		link: function($scope, $element, $attrs) {
			var svg = d3.select($element[0]).append('svg');
			var diff = $scope.end - $scope.start
			svg.append('svg:path').attr('d', d3.svg.arc().innerRadius(45).outerRadius(60).startAngle(0).endAngle(2 * Math.PI)).attr('transform', 'translate(60, 60)')
			svg.append('svg:path').attr('d', d3.svg.arc().innerRadius(45).outerRadius(60).startAngle($scope.start * 2 * Math.PI / $scope.total).endAngle(2 * Math.PI * $scope.end / $scope.total)).attr('transform', 'translate(60, 60)').attr('fill', '#FF4E00');
			svg.append('svg:text').attr({
				'text-anchor': 'middle',
				'font-family': 'Open Sans',
				'font-size': '5em',
				'font-weight': '800',
				'x': 60,
				'y': 85
			}).text($scope.end - $scope.start)
		}
	}
})
resume.directive('starChart', function() {
	return {
		restrict: 'EA',
		scope: {
			stars: '=stars',
			label: '=label'
		},
		link: function($scope, $element, $attrs) {
			var x = d3.scale.linear().domain([0, 1]).range([0, 100]);
			var options = {
				height: 20,
				fontSize: 14,
				width: '100%',
				textMargin: 10
			}
			var svg = d3.select($element[0]).append('svg').attr('width', options.width).attr('height', options.height);
			var text = svg.append('svg:text').attr({
				'x': 0,
				'y': options.height/2 + 6,
				'font-family': 'Open Sans',
				'font-weight': '600',
				'font-size': options.fontSize,
				'fill': 'black',
			}).text($scope.label)
			
			var computedTextLength = text.node().getComputedTextLength()
			
			for (var i = 0; i < $scope.stars; i++) {
				svg.append('svg:image').attr({
					'class': 'star',
					'y': 1,
					'height': options.height-2,
					'width': options.height-2,
					'xlink:href': 'images/star.svg',
					'x': -100
				}).transition().duration(900).attr('x', function() {
					return 185 - (options.height-2) * i;
				})
			}
		}
	}
})
resume.directive('horizontalBarChart', function() {
	return {
		restrict: 'EA',
		scope: {
			items: '=skills',
		},
		link: function($scope, $element, $attrs) {
			var options = {
				height: 150,
				fontSize: 16,
				margin: .15,
			}
			
			var svg = d3.select($element[0]).append('svg').attr('width', '100%').attr('height', options.height);
			
			var width = 100 / $scope.items.length
			var bar_width = width - (2*options.margin);
			var rainbow = new Rainbow()
			rainbow.setSpectrum('#de3541', '#f99b35')
			rainbow.setNumberRange(0, $scope.items.length-1)
			
			svg.selectAll('.skill').data($scope.items).enter()
				.append('svg:rect')
				.attr('class', 'skill')
				.attr('x', function(d, i) {
					return ((width * i) + options.margin) + '%';
				})
				.attr('height', function(d) {
					return (d.rating * 10) + '%';
				})
				.attr('y', 150)
				.attr('width', bar_width + '%')
				.attr('fill', function(d, i) {
					return '#' + rainbow.colourAt(i);
				}).on('mouseover', function(d) {
					d3.select(this).attr('opacity', .8)
				}).on('mouseout', function() {
					d3.select(this).attr('opacity', 1)
				}).transition().duration(function(d, i) {
					return 75 * (i+1);
				}).attr('y', function(d, i) {
					return 100 - (d.rating * 10) + '%';
				});
		}
	}
})