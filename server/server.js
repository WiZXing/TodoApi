require('./config/config');


const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();
const port = process.env.PORT || 3000;





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
app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // res.send(req.params);
    // Valid id using isValid
    if (!ObjectID.isValid(id)) {
        //404 send back empty body
        return res.status(404).send({});
    }
    // find by id
    Todo.findById(id).then((todo) => {
        if (!todo) return res.status(404).send({});
        else res.send({todo});
    }).catch((e) => {
        res.status(400).send({});
    });
        
    
    
        // success
            // if todo send back
            // if no todo sendback 404
        // error
            // 400 - send empty body

});

// Delete
app.delete('/todos/:id', (req, res) => {
    // get the id
    var id = req.params.id;
    // validate ? return 404
    if (!ObjectID.isValid(id))
        return res.status(404).send();
    // remove todo by id
    Todo.findByIdAndDelete(id).then((todo) => {
        if (!todo) return res.status(404).send();
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
        // success

            // if no doc send 404

            // if doc send doc back
        // err
            // 400 with empty body
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id))
        return res.status(404).send();
    if (_.isBoolean(body.completed) && body.completed)
    {
        body.completedAt = new Date().getTime();
    }
    else{
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo) => {
        if (!todo)
            return res.status(404).send();
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });



});


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};

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
