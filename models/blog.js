const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const blogSchema = new mongoose.Schema({
    
    title:{
        type : String,
        trim : true,
       
        min: 3,
        max: 150,
     
        required: true,
        
    },
   slug : {
        
        type : String,
        unique: true,
        index : true,
       
        
    },
   body : {
        
        type : {},
       
        required : true,
        min: 200,
        max: 200000
     
    },
    excerpt: {
        type: String,
       max: 1000
    },
    mtitle : {
        type: String
       
    },
    mdesc :{
      type  :  String
    } ,
   photo : {
        type: String,
        // required: true
        
    },
    categories : [{type: ObjectId, ref: 'Category' }],
  
    
    postedBy:{
        type:"String"
        // type: ObjectId,
        // ref: 'User'
    }
}, {timestamps: true })


module.exports = mongoose.model('Blog', blogSchema);