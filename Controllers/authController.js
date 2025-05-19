const bcrypt=require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../Models/User')
const mongoose=require('mongoose');
const {generateToken}=require('../Middleware/authMiddleware');



// signup 

async function signUp(req,res){
    console.log('')
   try{
       const {username,email,password}=req.body;
       const existingUser=await User.findOne({email});
       
       if(existingUser){
           return res.status(400).json('User already exist with this email');
       }
       // hash the password (for security reasons)
        
       const hashedpassword=await bcrypt.hash(password,12);

       // creating new using

       const newUser= await User.create(
           {
               username,
               email,
               password:hashedpassword
           }
       );
       
        

       // save the user to the database

       await newUser.save();
       
       // generate the token 
       const token=generateToken({userId:newUser._id,username:newUser.username});

       // success msg send to the user 
       res.status(201).json({
           data:token
       });



   }catch(error){
       console.log('singup error',error.message);
       res.status(500).json({message:'sigup failed. Please try again'});

   }

}

// login funciton
async function logIn(req,res){
   try{
       const {username,password}=req.body;

       // check user by email
       const user=await User.findOne({username});

       if(!user){
           return res.status(404).json({message:'User not found'});
       }

       // compare the passwords in the database

       const ispasswordValid=await bcrypt.compare(password,user.password);
       if(!ispasswordValid){
           return res.status(404).json({message:'Incorrect password'});
       }

       // generate the token

       const token= generateToken({userId:user._id,username:user.username});
       
       res.status(201).json({
           data:token
       });


   }catch(error){
       console.log('unable to login',error.message);
       res.status(500).json({message:'Unable to login Try again'});

   }

}
// forget password
; // Your User model

async function forgotPassword(req, res) {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString('hex');
  const expiry = Date.now() + 1000 * 60 * 60; // Token expires in 1 hour

  user.resetToken = resetToken;
  user.resetTokenExpiry = expiry;
  await user.save();

  // Send email with the reset link
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'vikaskundal74@gmail.com',
      pass: 'xmgs vqnv cckc zglj',
    },
  });

  const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}`;

  await transporter.sendMail({
    to: user.email,
    subject: 'Password Reset Request',
    html: `<p>You requested a password reset</p><p><a href="${resetUrl}">Click here to reset</a></p>`,
  });

  res.json({ message: 'Password reset link sent to your email' });
}


//Reset password

async function resetPassword(req, res) {
  const { token, newPassword } = req.body;

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: Date.now() }, // Check if token has not expired
  });

  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  // Hash new password and update user
  const hashedPassword = await bcrypt.hash(newPassword, 12);
  user.password = hashedPassword;
  user.resetToken = undefined; // Clear the reset token
  user.resetTokenExpiry = undefined; // Clear the expiry time

  await user.save();

  res.json({ message: 'Password has been reset successfully' });
}


module.exports={
   signUp,
   logIn,
   resetPassword,
   forgotPassword

};