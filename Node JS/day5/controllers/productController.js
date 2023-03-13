const PModel = require("../models/productModel");
//const bcrypt = require("bcrypt");



let getAll = async (req, res) => {
    let allProducts = await PModel.find()
    res.json(allProducts)
}

let genOne = async (req, res) => {
    let Products = await PModel.findOne({ name: req.params.productId })
    console.log(Products)
    res.json(Products)
}

let addProduct = async (req, res) => {
    let newProduct = {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
    }
    await PModel.insertMany(newProduct)
    res.json(newProduct)
}

let deleteProduct = async (req, res) => {
    await PModel.deleteOne({ name: req.params.productId })
    res.json('deleted')
}

let updateProduct = async (req, res) => {
    await PModel.findByIdAndUpdate(req.params.productId, req.body)
    res.json('updated')
}

module.exports = {
    getAll,
    genOne,
    addProduct,
    deleteProduct,
    updateProduct
}