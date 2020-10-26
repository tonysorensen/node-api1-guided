// 1- DEPENDENCIES
// import express from 'express' // package.json needs a "type" key with a value of "module"
const express = require('express') // commonjs module system that came with Node
// import { generate } from 'shortid' // ES6 modules
const generate = require('shortid').generate

// 2- INSTANTIATE AND CONFIGURE THE SERVER
const app = express() // here is our app (our server)
app.use(express.json()) // plugging in a piece of middleware

// 3- DECIDE A PORT NUMBER
const PORT = 5000

// 4- FAKE DATA
let dogs = [
  { id: generate(), name: 'Bicho', breed: 'Maltese' },
]

// 5- ENDPOINT 
//  [GET] all dogs in the db
//  catch all endpoint (404 resource not found)
app.get('*', (req, res) => {

})
