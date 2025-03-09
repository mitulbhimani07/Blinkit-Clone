const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartProductSchema = new Schema({
    productId : {
        type: mongoose.Schema.ObjectId,
        ref : 'Product'
    },
    quantity : {
        type : Number,
        default : 1
    },
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },  
},{
    timestamps : true
});
const CartProductModel = mongoose.model('CartProduct', cartProductSchema);
module.exports = CartProductModel;