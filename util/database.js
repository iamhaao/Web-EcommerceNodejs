const e = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://iamhaao:lehao1911@cluster.eqrwnuv.mongodb.net/shop?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected to MongoDB successfull!');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
        }
        );
}
const getDb = () => {
    if (_db) {
        return _db;
    } else {
        throw 'No Database found';
    }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;


