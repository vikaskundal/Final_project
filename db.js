/*Connect the mongoDB */
// importing  the required libraries 

const mongoose =require('mongoose');
require('dotenv').config();


 
const connectedDB = async () => {
    console.log('Attempting DB connection...');
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports= {connectedDB};