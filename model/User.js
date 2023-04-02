const mongoose=require('mongoose')
//making a schema
const loginSchema=new mongoose.Schema({
     Username:{
        type:String,
        required:true
     },
     Password:{
        type:String,
        required:true
     }
})
//making model
const SignIn=mongoose.model('userdatas',loginSchema);

module.exports=SignIn;