var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then(() => {
    res.send(doc);
  }).catch( (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('started on 3000');
});
