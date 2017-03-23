import angular from 'angular'
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import ngTimeline from 'angular-timeline';
import ngScrollAnimate from 'angular-scroll-animate';
import resumeTemplate from './templates/resume.tmpl.html';
import ResumeController from './controllers/resume.ctrl';
import starChart from './directives/starChart'

require('./styles');

export default angular.module('resume', [ngMaterial, uiRouter, 'angular-timeline', 'angular-scroll-animate'])
.config(['$mdThemingProvider', function configureThemes($mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('blue');
}])
.config(['$stateProvider', '$urlRouterProvider', function configureUiRouter($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: resumeTemplate,
    controller: ResumeController,
    controllerAs: 'vm',
    bindToController: true,
  });
  $urlRouterProvider.otherwise('/');
}])
.directive('starChart', starChart);
