const Product= require('../models/products')


const getAllProducts = async (req,res)=>{
    const MyData= await Product.find(req.query);
    res.status(200).json({MyData});
};

const getAllProductsTesting = async(req,res)=>{
    const MyData= await Product.find(req.query).sort('-price');
    res.status(200).json({MyData});
};

module.exports= {getAllProducts,getAllProductsTesting};