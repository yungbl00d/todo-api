// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect');
  }
  console.log('nice we did it');


  db.collection('Users').findOneAndUpdate({
    name: 'bander schrader'
  }, {
    $set: {
      name: 'lander schrader'
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close();
});
