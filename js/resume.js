var resume = angular.module('resume', [])
resume.controller('ExperienceController', ['$scope', function($scope) {
	$scope.skills = [
       { title: 'AngularJS', rating: 8.0 },
       { title: 'D3.js', rating: 7.5 },
       { title: 'Java EE', rating: 10.0 },
       { title: 'Relational Databases', rating: 10.0 },
       { title: 'Groovy / Grails', rating: 9.0 },
       { title: 'Ruby on Rails', rating: 6.0 },
       { title: 'Neo4j', rating: 7.0 },
       { title: 'Titan DB', rating: 8.0 },
       { title: 'JQuery', rating: 8.0 },
       { title: 'Linux', rating: 7.0 },
       { title: 'CSS', rating: 8.5 },
       { title: 'Git', rating: 9.0 },
       { title: 'Subversion', rating: 9.0 },
       { title: 'IBM WebSphere v6.1', rating: 6.5 },
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
resume.directive('barChart', function() {
	return {
		restrict: 'EA',
		scope: {
			percentage: '=percentage',
			title: '=title'
		},
		link: function($scope, $element, $attrs) {
			var x = d3.scale.linear().domain([0, 1]).range([0, 100]);
			var options = {
				height: 18,
				fontSize: 16
			}
			var svg = d3.select($element[0]).append('svg').attr('width', '100%').attr('height', options.height);
			var gradient = svg.append("svg:defs")
			  .append("svg:linearGradient")
			    .attr("id", "gradient")
			    .attr("x1", "0%")
			    .attr("y1", "100%")
			    .attr("x2", "100%")
			    .attr("y2", "100%")
			    .attr("spreadMethod", "pad");
			 
			gradient.append("svg:stop")
			    .attr("offset", "0%")
			    .attr("stop-color", "#EED000")
			    .attr("stop-opacity", 1);
			 
			gradient.append("svg:stop")
			    .attr("offset", "100%")
			    .attr("stop-color", "#FF4E00")
			    .attr("stop-opacity", 1);
			
			svg.append('svg:rect').attr({
				'x': '0%',
				'y': 0,
				'width': '100%',
				'height': options.height,
				'fill': '#FF4E00'
			});
			svg.append('svg:rect').attr({
				'x': x($scope.percentage) + '%',
				'y': 0,
				'width': '100%',
				'height': options.height,
				'fill': 'rgba(255,255,255,0.7)'
			})
			svg.append('svg:text').attr({
				'x': x($scope.percentage) - 3 + '%',
				'y': options.height/2 + 6,
				'font-family': 'Open Sans',
				'font-weight': '100',
				'font-size': options.fontSize,
				'fill': 'white',
				'text-anchor': 'end'
			}).text($scope.title)
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