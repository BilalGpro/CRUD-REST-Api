const express=require('express');
const router = express.Router();
const product= require('../models/products')

const {getAllProducts,getAllProductsTesting} = require('../controller/products')

router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);
router.delete('/:productID', async (req,res)=>{
    try{
        const deleteproduct= await product.findByIdAndDelete(req.params.productID);
        res.json(deleteproduct);
    }catch (error){
        res.json({message:error})
    }
})
router.post('/addproducts', async (req,res)=>{
    const Product= new product({
        name:req.body.name,
        price:req.body.name,
        company:req.body.company
    })
    try{
        const savedproduct= await Product.save();
        res.setHeader('Content-Type','application/json');
        res.status(200);
        res.send(savedproduct)
    }catch(error){
        res.json({message:error});
    }
})

module.exports=router;
