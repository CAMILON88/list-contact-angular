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