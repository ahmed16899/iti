const UModel = require("../models/userModel");
//const bcrypt = require("bcrypt");
const bcrypt = require('bcrypt');



let getAll = async (req, res) => {
    let allUsers = await UModel.find()
    res.json(allUsers)
}

let genOne = async (req, res) => {
    let User = await UModel.findOne({ name: req.params.userId })
    console.log(User)
    res.json(User)
}

let addUser = async (req, res) => {
   // console.log(req.file.path)
    req.body.img = req.file.path
    bcrypt.hash(req.body.password, 10, async function(err, hash) {
        console.log(hash)
        req.body.password = hash
        await UModel.insertMany(req.body)
    });
    res.json(req.body)
}

let deleteUser = async (req, res) => {
    await UModel.deleteOne({ name: req.params.userId })
    res.json('deleted')
}

let updateUser = async (req, res) => {
    await UModel.findByIdAndUpdate(req.params.userId, req.body)
    res.json('updated')
}

module.exports = {
    getAll,
    genOne,
    addUser,
    deleteUser,
    updateUser
}