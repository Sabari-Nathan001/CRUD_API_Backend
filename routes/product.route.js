const express=require('express')
const router=express.Router();
const {getProducts,getProduct, createProduct, updateProduct, deleteProduct}=require('../controllers/product.controller.js')

//CRUD API

//Create a Product
router.post('/',createProduct);

//Read / Display all Products
router.get('/',getProducts);

//Read / Display specific Product
router.get('/:id',getProduct);

//Update a Product
router.put('/:id',updateProduct);

//Delete a Product
router.delete('/:id',deleteProduct);


module.exports=router