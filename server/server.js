var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');

var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/1231123(id)


app.listen(3000, () => {
    console.log('Started on port 3000');
});



// var newUser = new User({
//     email: 'xwzxwz01@hotmail.com'
// });
// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc,undefined,2));
// }, (e) => {
//     console.log('Unable to save user');
// });


// var newTodo = new Todo({
//     text: "   Cook Breakfast   "

// });



// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc,undefined,2));
// }, (e) => {
//     console.log('Unable to save todo');
// });
