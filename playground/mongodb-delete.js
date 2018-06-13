// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect');
  }
  console.log('nice we did it');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'suck dick'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'suck dick'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });
  //db.close();
});
