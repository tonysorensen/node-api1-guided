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
// [GET] all dogs in the db
app.get('/dogs', (req, res) => {
  res.status(200).json(dogs)
})

// [GET] dog with the id passed as a parameter in the URL
app.get('/dogs/:id', (req, res) => {
  // 1- pull out the id from the request (the URL param)
  const { id } = req.params
  // 2- find the dog in the dogs arr with the given id
  const dog = dogs.find(dog => dog.id === id)
  // 3- set status code and send back the dog
  if (!dog) {
    res.status(404).json({
      message: `No dog with id ${id}`,
    })
  } else {
    res.status(200).json(dog)
  }
})

// [POST] dog using the request body as raw material
app.post('/dogs', (req, res) => {
  // 1- pull out the { name, breed } from the body of req
  const { name, breed } = req.body
  // 2- make sure the body includes name and breed
  if (!name || !breed) {
    res.status(400).json({
      message: 'Name and breed are required'
    })
  } else {
    // 3- make a new resource, complete with unique id
    const newDog = { id: generate(), name, breed }
    // 4- add the new dog to our fake db
    dogs.push(newDog)
    // 5- send back the newly created resource
    res.status(201).json(newDog) // up to you what to send
  }
})

// [PUT] replace dog with given id (params) with the { name, breed }
app.put('/dogs/:id', (req, res) => {
  // 1- pull id from params
  // 2- pull name and breed from body
  // 3- validate id and validate req body
  // 4- find the dog and swap "breed" and "name"
  // 5- 
})

// [GET, POST...] catch all endpoint (404 resource not found)
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not found!' })
})

// 6- LISTEN FOR INCOMING REQUESTS
app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`)
})
