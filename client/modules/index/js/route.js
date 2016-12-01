;(function(){
	'use strict';

	angular
		.module('myApp')
		.config(config)
		.run(['$rootScope','$state','$stateParams','$window','localStorageService',function($rootScope,$state,$stateParams,$window,localStorageService){
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;

			$rootScope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){

			});
		}]);

	config.$inject = ['$locationProvider','$stateProvider','$urlRouterProvider','$httpProvider','ngRapProvider'];

	function config($locationProvider,$stateProvider,$urlRouterProvider,$httpProvider,ngRapProvider){
		$stateProvider
			.state('signIn',{
				url:'/sign_in',
				templateUrl : '/modules/account/views/sign_in.html',
				controller:'signInCtrl',
				controllerAs:'vm'
			});

		$locationProvider.html5Mode(true);
	}
})();