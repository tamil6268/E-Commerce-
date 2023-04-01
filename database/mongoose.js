const mongoose=require('mongoose');

const url=process.env.URL;

const connect=async()=>{
    try{
        await mongoose.connect(url);
        console.log("Connected")
    }catch(error){
        console.log(error);
    }
}
module.exports=connect;