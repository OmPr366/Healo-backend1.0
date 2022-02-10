const mongoose = require('mongoose')


const termsSchema = new mongoose.Schema({
    
    title:{
        type : String,
        trim : true,
       
        min: 3,
        max: 150,
     
        required: true,
        
    },
  
   content : {
        
        type : {},
       
        required : true,
        // min: 200,
        max: 200000
     
    }
   
   
 
    
   
}, {timestamps: true })


module.exports = mongoose.model('Terms', termsSchema);