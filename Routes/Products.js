const router=require('express').Router();
const ProductController=require('../Controllers/Products');

router.get('/Product',ProductController.ProductData)

module.exports=router;

