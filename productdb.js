const connectDB = require('./db/connect');
const Product= require('./models/products');

const ProducJson= require('./products.json');

const start = async ()=>{
    try{
        await connectDB();
        await Product.create(ProducJson);
        console.log('success')
    } catch (error){
        console.log(error);
    }
};

start();