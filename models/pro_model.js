const { default: mongoose } = require('mongoose');


const newpro = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },

        quantity: {
            type: Number,
            require: true,
           
        },

        price: {
            type: Number,
            require: true,
        },

        image:{
            type:String,
            require:false,
        }
    },
    {
        timestamps:true,
    },
)

 const Pro = mongoose.model('Pro',newpro);
 
 module.exports = Pro;