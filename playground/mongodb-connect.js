//const MongoClient =require('mongodb').MongoClient; 
const {MongoClient, ObjectID} = require('../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Information').insertOne({
    //     name: 'Yun',
    //     age: 19,
    //     location: 'Katy'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Information', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp()); 
    // });

    client.close(); 
});