const {Product} =require('../model/products');

const ProductData = async(req, res) => {
    console.log("Getting data from database")
    try{
       const data=await Product.find({});
       const productList=data.map((item)=>({
        id:item.id,
        Name: item.Name ,
        Rating: item.Rating,
        New_Price:item.New_Price,
        Old_Price:item.Old_Price ,
        url:item.url ,
        Catagory:item.Catagory ,
        Reviews:item.Reviews,
        trend:item.trend
       }))
       console.log(productList)
       res.status(200).send(productList);
    }catch(error){
       console.log("Error",error)
       res.status(500).send({message:"Error While getting the data from database",error});
    }
}
module.exports={ProductData}