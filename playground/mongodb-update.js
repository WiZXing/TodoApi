// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to database.');
    const db = client.db('TodoApp');

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({_id: new ObjectId("5c38ecd54df9dea8498e73d7")}, {
    //     // mongodb update operators
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({_id: new ObjectId("5c37dd6e797bc43ab5ed051a")}, {
        $set: {
            name: 'Weiz Xing'
        },
        $inc : {
            age : 1
        }
    }, {
        returnOriginal: false
    }).then ((result) => {
        console.log(result);
    });

    
    
    //client.close();
});

// The id: 4 byte time stamp + 3 byte machineId + 2 byte process ID + 3 bytes counter