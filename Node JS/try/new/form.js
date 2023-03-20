

const path=require('path')
const form = require('express').Router()



form.get('/', (req, res) => {

    res.sendFile(path.join(__dirname,'..', 'index.html'))
})
form.post('/', (req, res) => {

    console.log(req.body);
    res.redirect('/')
})




module.exports=form
