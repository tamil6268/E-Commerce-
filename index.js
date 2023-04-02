const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
// const bodyparser=require('body-parser');
const cors=require('cors');
const connection=require('./database/mongoose');
const ProductsRoutes=require('./Routes/Products');

app.use(express.json());
app.use(express.urlencoded({extended:true}));//is must while getting req from backend
app.use(cors());
app.use('/',ProductsRoutes);

app.listen(process.env.PORT,async()=>{
    console.log(`server started at port ${process.env.PORT}`)
    console.log("Connecting to database")
    await connection()
})