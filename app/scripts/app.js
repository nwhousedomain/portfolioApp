'use strict';

/**
 * @ngdoc overview
 * @name portfolioAppApp
 * @description
 * # portfolioAppApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
 .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
     $urlRouterProvider
    .otherwise('/');

     //$locationProvider.html5Mode(true);

     $stateProvider.state('main', {
         url: '/main',
         templateUrl: 'views/main.html',
         controller: 'Main.controller',
         //controllerAs: 'main'
     })
       .state('main.officemax', {
           url: '/officemax',
           templateUrl: 'views/Shared/officemax.html',
           //controller: 'resume.controller',
           //controllerAs: 'main'
       })
       .state('main.vproductions', {
           url: '/vproductions',
           templateUrl: 'views/Shared/vproductions.html',
           //controller: 'resume.controller',
           //dcontrollerAs: 'main'
       })
      .state('main.uok', {
          url: '/uok',
          templateUrl: 'views/Shared/uok.html',
          //controller: 'resume.controller',
          //dcontrollerAs: 'main'
      })
      .state('main.proux', {
          url: '/proux',
          templateUrl: 'views/Shared/proux.html',
          //controller: 'resume.controller',
          //dcontrollerAs: 'main'
      })
          .state('main.backgroundimage', {
              url: '/backgroundcolor',
              templateUrl: 'views/Shared/backgroundcolor.html',
              //controller: 'resume.controller',
              //dcontrollerAs: 'main'
          })
     .state('main.personalisation', {
         url: '/personalisation',
         templateUrl: 'Views/personalisation.html',
     })
    
      .state('main.desktop', {
          url: '/desktop',
          templateUrl: 'Views/Shared/desktop.html',
      })
      .state('main.document', {
          url: '/document',
          templateUrl: 'Views/Shared/document.html',
      })
     .state('main.video', {
         url: '/video',
         templateUrl: 'Views/Shared/video.html',
     })
     .state('main.download', {
         url: '/download',
         templateUrl: 'Views/Shared/download.html',
     })
     .state('main.picture', {
         url: '/picture',
         templateUrl: 'Views/Shared/picture.html',
     })
       .state('main.game', {
           url: '/game',
           templateUrl: 'Views/Shared/game.html',
       })

     $stateProvider.state('resume', {
         url: '/resume',
         templateUrl: 'views/resume.html',
         //controller: 'resume.controller',
         //controllerAs: 'main'
     })    
 });
