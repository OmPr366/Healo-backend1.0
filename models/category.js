const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    
    name : {
        
        type : String,
        trim : true,
        require : true,
        max: 32,
        
    },
    slug : {
        
        type : String,
        
        unique : true,
        index: true
    },
   
}, {timestamp: true })


module.exports = mongoose.model('Category', categorySchema);