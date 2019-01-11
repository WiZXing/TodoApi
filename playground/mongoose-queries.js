const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "5c391f24c4a86a4159d0b55e";

// if (!ObjectID.isValid(id))
// {
//     return console.log('ID not valid!');
// }
// Todo.find({
//    _id: id 
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id 
//  }).then((todo) => {
//      console.log('Todo', todo);
//  });

//  Todo.findById(id).then((todo) => {
//      if (!todo) {
//          return console.log('Id not found');
//      }
//      console.log('Todo by ID', todo);
//  }).catch((e) => console.log(e));

var id = "5c390d03cd334d3e76e12ade";
if (!ObjectID.isValid(id)) {
    return console.log('Id not valid!');
}
User.findById(id).then((user) => {
    if (!user) return console.log('Id not found');
    console.log('User by Id', user);
}).catch((e) => {
    console.log(e);
});