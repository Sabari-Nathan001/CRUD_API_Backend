const express = require('express')
const mongoose = require('mongoose')
const Product=require('./models/product.model.js')
const ProductRoute=require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json())

//routes
app.use("/api/products",ProductRoute)


app.get('/',(req,res)=>{
  res.send("Hello From Node API Server"); 
})

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://sabarinathanDB:sabari123@backenddb.m2vvsog.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
  console.log("Connected to DB");
  app.listen(3001,()=>{
    console.log('Server is running on Port 3001');
  });
})
.catch(()=>{
  console.log("Connection Failed!");
})

