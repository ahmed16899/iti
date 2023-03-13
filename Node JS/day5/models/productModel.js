//DB_URL
let mongoose = require("mongoose");
let DB_URL = "mongodb://localhost:27017/Users";

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const pSC = mongoose.Schema({
    name: String,
    description: String,
    quantity: String,
    price: String,
})
module.exports = mongoose.model('Product', pSC)
