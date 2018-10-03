var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ete-db";

MongoClient.connect(url, function(err,client){
	if (err) throw err;
	console.log("Database created!");
	
	const db = client.db("ete-db");
	db.collection('authen').insertMany([
		{
			username: "indykuma",
			password: "pass123"
		},
		{
			username: "sabuza",
			password: "pass456"
		}
	]);

	client.close();
});


