app.controller("HomeController", ['$scope','$routeParams','dbService','$firebaseArray', function($scope,$routeParams,dbService,$firebaseArray){
	$scope.contacts = dbService;
    
}]);