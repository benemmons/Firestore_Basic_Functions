firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: ''
});

var db = firebase.firestore();


function set_data(collection_name, doc_title, new_data) {
	db.collection(collection_name).doc(doc_title).set(new_data);
	return get_data(collection_name)
}

function get_data(collection_name){
	data = []
	db.collection(collection_name).get().then(function(querySnapshot) {
	    querySnapshot.forEach(function(doc) {
	    	data.push(doc.data());
	    });
	});
	return data;
}
