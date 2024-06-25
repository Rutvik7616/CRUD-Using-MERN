const mongoose=require('mongoose');

const bookschema=new mongoose.Schema({
    book_name:{
        type:String,
        require:true
    },
   book_auther:{
        type:String,
        require:true
    },
    book_price:{
        type:Number,
        require:true
    },
    book_publish_date:{
        type:Date,
        require:true
    },
    status:{
        type:String,
        enum:['enable','disable'],
        default:'enable'

    }
})
module.exports=mongoose.model('bs_books',bookschema)