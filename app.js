const express= require('express');
const app=express();
const connectDB=require('./db/connect')
const PORT=5000;

const start =  async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log('t')
        });
        await connectDB(); 
    }
    catch(error){
        console.log(error);
    }
    
}
start();


const product_routes=require('./routes/products');


app.get('/',(req,res)=>{
    res.send('i am live')
})


app.use(express.json());
//middleware or to set router

app.use('/api/products',product_routes);