// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect');
  }
  console.log('nice we did it');


  db.collection('Users').insertOne({
    name: 'theo schrader',
    age: 19,
    location: "seoul"
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });
  db.close();
});
