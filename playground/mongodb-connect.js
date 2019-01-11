// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);



// Object restruct
// var user = {name: 'xwz', age: 22};
// var {name} = user;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to database.');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     compeleted: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Inable to insert Todo!', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert a new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'XWZ',
    //     age: 23,
    //     location: 'UCSD'
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Inable to insert user!', err);
    //     }

    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    client.close();
});

// The id: 4 byte time stamp + 3 byte machineId + 2 byte process ID + 3 bytes counter