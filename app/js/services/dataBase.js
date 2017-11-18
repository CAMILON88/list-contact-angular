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