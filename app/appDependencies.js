var app = angular.module("app", ['ngRoute','firebase']);


app.config(['$routeProvider', function ($routeProvider){

 	$routeProvider
 		.when('/', {
     		templateUrl:'js/views/home.html',
     		controller: 'HomeController'
  		})
  		.when('/contact/new', {
   	 		templateUrl: 'js/views/newContact.html',
     		controller: 'ContactController'
  		})
 		.when('/contact/:id', {
   	 		templateUrl: 'js/views/showContact.html',
     		controller: 'ContactController'
  		})
  		.when('/contact/edit/:id', {
   	 		templateUrl: 'js/views/editContact.html',
     		controller: 'ContactController'
  		})  		
	  	.otherwise ({
	     	templateUrl:'scripts/views/home.html'
	  	});

}]);

app.factory("dbService", ["$firebaseArray",  function($firebaseArray) {
	var ref = new Firebase('https://contact-list-9ccb0.firebaseio.com');
	return $firebaseArray(ref);
	    
}]);
  
/*
app.factory('dbService',["$firebaseArray", function($firebaseArray) {
	var _url = 'https://contacts-mir-db.firebaseio.com/contacts';
	var _ref = new Firebase(_url)

	return {
		getContacts: function() {
			return $firebaseArray(_ref);
		},
		addItem: function(item){
    		_ref.push(item);
		},
		deleteItem: function(id){
    		var itemRef = new Firebase(_url + '/' + id);
    		itemRef.remove();
		}
	};
}]);

*/
app.controller("HomeController", ['$scope','$routeParams','dbService','$firebaseArray', function($scope,$routeParams,dbService,$firebaseArray){
	$scope.contacts = dbService;
    
}]);
app.controller("ContactController", ['$scope','$routeParams','$location','dbService', function($scope,$routeParams,$location,dbService){
	$scope.contacts = dbService;
	function getContact(id){
		for(var i = 0; i < $scope.contacts.length; i++) {
			if($scope.contacts[i].$id == id){
				return $scope.contacts[i];
			}
		}
		return null;
	};
	function getPosition(id){
		for(var i = 0; i < $scope.contacts.length; i++) {

		    if($scope.contacts[i].$id == id) {
		        return i;
		    }
		}
	};
	$scope.contact = getContact($routeParams.id);

	$scope.showContact = function(){
		$scope.contact = getContact($routeParams.id); 
	};
	$scope.editarContact = function(contact){
		$scope.contacts[getPosition(contact.$id)] = contact;
		$scope.contacts.$save(contact);
		$location.url('/#');
	};
	$scope.deleteContact = function(id, event){
		event.preventDefault();
		if(confirm("Are you sure?")){
			$scope.contacts.$remove(getContact(id));
			$location.url('/#');
		}
	};
	$scope.saveContact = function(contact){
		$scope.contacts.$add(contact);
		$location.url('/#');
	};
}]);