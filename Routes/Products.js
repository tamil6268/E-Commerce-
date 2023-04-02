const router=require('express').Router();
const ProductController=require('../Controllers/Products');
const UserController=require('../Controllers/User')

router.get('/Product',ProductController.ProductData)
router.post('/login',UserController.login)
router.post('/register',UserController.register)

module.exports=router;

