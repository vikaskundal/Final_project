/*Connect the mongoDB */
// importing  the required libraries 

const mongoose =require('mongoose');
require('dotenv').config();


 
const connectedDB=  async ()=>{
    console.log('hello from DB')
    try{
        // add the url from the env file
        const mongoURI='mongodb+srv://vikaskundal74:EX6mU7ptqdFBEgJN@cluster0.gvlleqd.mongodb.net/Projecttwo'
    await mongoose.connect(mongoURI);
    console.log('DB is connected')
    }catch(error){
        console.log('Database-not-connected',error.message)
    }

}

module.exports= {connectedDB};