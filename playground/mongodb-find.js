// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect');
  }
  console.log('nice we did it');

  // db.collection('Todos').find({name: "theo schrader"}).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('error:', err);
  // });
  db.collection('Users').find({name: 'theo schrader'}).count().then((count) => {
    console.log(`user count: ${count}`);
  }, (err) => {
    console.log('error:', err);
  });

  //db.close();
});
