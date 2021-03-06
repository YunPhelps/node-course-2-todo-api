//const MongoClient =require('mongodb').MongoClient; 
const {MongoClient, ObjectID} = require('../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b59514aa53cea5a647a6f22')
    // }).toArray().then((docs) => {
    //     console.log('Todos'); 
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todo count: ${count}`); 
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //client.close(); 
});