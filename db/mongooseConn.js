const mongoose = require('mongoose');
const dbConnString = require('./dbConnString');

//CONNECTING TO DATABASE
mongoose.connect(dbConnString, { useNewUrlParser: true})
const conn = mongoose.createConnection(dbConnString);

module.exports = conn;