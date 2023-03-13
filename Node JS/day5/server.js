const express = require("express");
const app = express();//createServer()
const bodyparser = require("body-parser");

const path = require("path");
let PORT = process.env.PORT || 7005;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const mongoose = require('mongoose');
const ProductRoutes = require("./routes/productRoute");
const UserRoutes = require("./routes/userRoute");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'img')
    },
    filename: function (req, file, cb) {
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      //cb(null, file.fieldname + '-' + uniqueSuffix)
      cb(null, Date.now()+Math.random()*1000+file.originalname)
    } 
  })
  
  //const upload = multer({ storage: storage })



app.use(multer({dest:"img" , storage} ).single("img"))



/*mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const pSC = mongoose.Schema({
    name: String,
    description: String,
    quantity: String,
    price: String,
})
const pModel = mongoose.model('Product', pSC)*/


app.use("/products",ProductRoutes);
app.use("/user",UserRoutes);




/*app.get('/products', async (req, res) => {
    let allProducts = await pModel.find()
    res.json(allProducts)
})

app.get('/products/:productId',  async(req, res) => {
    let Products = await pModel.findOne({name:req.params.productId})
    console.log(Products)
    res.json(Products)
})

app.post('/products', async (req, res) => {
    let newProduct = {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
    }
    await pModel.insertMany(newProduct)
    res.json(newProduct)
})


app.delete('/products/:productId',  async(req, res) => {
    await pModel.deleteOne({name:req.params.productId})
    res.json('deleted')
})


app.put('/products/:productId',  async(req, res) => {
   await pModel.findByIdAndUpdate(req.params.productId,req.body)
    res.json('updated')
})*/

app.listen(PORT, () => { console.log("http://localhost:" + PORT) });


