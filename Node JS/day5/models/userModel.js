//DB_URL
let mongoose = require("mongoose");
let DB_URL = "mongodb://localhost:27017/Users";

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const uSC = mongoose.Schema({
    name: String,
    address: String,
    email: String,
    age: Number,
    password: String,
    img:String
})
module.exports = mongoose.model('User', uSC)
