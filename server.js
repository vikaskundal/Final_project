const express = require('express');
const cors = require('cors');
const app=express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { connectedDB } = require('./Config/db');
const authRoutes = require('./Router/authRoutes');
const productRoutes = require('./Router/productRoute'); 

dotenv.config();



// connect to the mongoDB
connectedDB();
// Definning the routes
app.use(express.json());
app.use(cors());


// login and SignUp
app.use('/auth', authRoutes);
//Product routes
app.use('/',productRoutes);


const PORT=process.env.PORT || 5000
 app.listen( PORT,()=>{
    console.log(`server is running on the ${PORT}`)
 });