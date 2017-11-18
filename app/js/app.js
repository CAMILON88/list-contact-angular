var app = angular.module("app", ['ngRoute','firebase']);


app.config(['$routeProvider', function ($routeProvider){

 	$routeProvider
 		.when('/', {
     		templateUrl:'scripts/views/home.html',
     		controller: 'HomeController'
  		})
  		.when('/contact/new', {
   	 		templateUrl: 'scripts/views/newContact.html',
     		controller: 'ContactController'
  		})
 		.when('/contact/:id', {
   	 		templateUrl: 'scripts/views/showContact.html',
     		controller: 'ContactController'
  		})
  		.when('/contact/edit/:id', {
   	 		templateUrl: 'scripts/views/editContact.html',
     		controller: 'ContactController'
  		})  		
	  	.otherwise ({
	     	templateUrl:'scripts/views/home.html'
	  	});

}]);
