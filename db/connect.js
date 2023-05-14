const mongoose= require('mongoose');

const uri=('mongodb+srv://bilalgondal:1234@cluster0.256k5.mongodb.net/?retryWrites=true&w=majority');

const connectDB = ()=>{
    console.log('connected DB');
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports= connectDB;