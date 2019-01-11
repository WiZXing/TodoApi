// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to database.');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectId("5c37e1af4df9dea8498e629f")  
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    db.collection('Users').find({name: 'XWZ'}).count().then((count) => {
        console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    
    
    //client.close();
});

// The id: 4 byte time stamp + 3 byte machineId + 2 byte process ID + 3 bytes counter