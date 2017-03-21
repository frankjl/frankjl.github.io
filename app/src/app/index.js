import angular from 'angular'
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import ngScrollAnimate from 'angular-scroll-animate';
import resumeTemplate from './templates/resume.tmpl.html';

require('./styles');

angular.module('resume', [ngMaterial, uiRouter, 'angular-scroll-animate'])
.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue');
})
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider.state('home', {
    url: '/',
    template: resumeTemplate,
    controller() {
      this.animateIn = ($el) => {
        $el.removeClass('hidden');
        $el.addClass('animated zoomIn');
      }
      this.animateOut = ($el) => {
        // $el.addClass('hidden');
        // $el.removeClass('animated zoomIn');
      }
    },
    controllerAs: 'vm',
    bindToController: true,
  });
  $urlRouterProvider.otherwise('/');
});
