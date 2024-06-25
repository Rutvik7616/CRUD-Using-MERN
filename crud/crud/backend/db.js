const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bookstore');

mongoose.connection.on('connected',()=>{
    console.log("Connected Successfully")
});
mongoose.connection.on('error',(err)=>{
    console.error(" Error While Connecting ",err)
})

module.exports=mongoose;