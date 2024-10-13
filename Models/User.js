const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role: {
        type: String,
        enum: ['user', 'admin'], // Specify the possible roles
        default: 'user' // By default, every new user is a regular user
      }
});

const UserModel= mongoose.model('User',UserSchema);

module.exports=UserModel;
