var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ete-db";

MongoClient.connect(url, function(err,client){
	if (err) throw err;
	console.log("Database created!");
	
	const db = client.db("ete-db");
	var cursor = db.collection('authen').find({});

	function iterateFunc(doc){
		console.log(JSON.stringify(doc,null,4));
	}

	function errorFunc(error){
		console.log(error);
	}

	cursor.forEach(iterateFunc, errorFunc);
	client.close();
});