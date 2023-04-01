const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    id: Number,
    Name: String,
    Rating: Number,
    New_Price: Number,
    Old_Price: Number,
    url: String,
    Catagory: String,
    Reviews:String,
    trend:String
})

const Product=mongoose.model("productCollection",productSchema,"productCollection");

module.exports={Product};