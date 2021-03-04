const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors');
const stripe = require('stripe')(/*Stripe secret key*/)
// Use secret key

// API 

// App configuration
const app = express()

// Middlewares
app.use(cors({origin : true}))
app.use(express.json()) 

//API routes
app.get('/' , (req,res) => 
    res.status(200).send('Hello World')
)

// Used in Payment.js to get a response
app.post('/payment/create' , async (req,res) => {
   const total  = req.query.total
   //console.log(total , 'amount --------------')

   const paymentIntent = await stripe.paymentIntents.create({
       amount : total , 
       currency : 'inr' ,
   })

   // 201 -> Okay and created something status
   res.status(201).send({
       clientSecret : paymentIntent.client_secret
   })

})

//Listen 
exports.api = functions.https.onRequest(app)

//Example End point 
//http://localhost:5001/clone-96988/us-central1/api



