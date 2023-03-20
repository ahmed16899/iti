

const express = require('express')
const x = express()

const path = require('path')

const form=require('./new/form')


x.use(express.urlencoded({ extended: false }))

x.use(form)



x.listen(5454, () => {

    console.log('server is running....');
})