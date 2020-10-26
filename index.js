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

// 5- ENDPOINTS
//  [GET] all dogs in the db
app.get('/dogs', (req, res) => {
  res.status(200).json(dogs)
})

app.get('/dogs/:id', (req, res) => {
  // 1- pull out the id from the request (the URL param)
})

//  [GET] catch all endpoint (404 resource not found)
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not found!' })
})

// 6- LISTEN FOR INCOMING REQUESTS
app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`)
})
