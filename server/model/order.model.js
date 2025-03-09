const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId : {
        type: mongoose.Schema.ObjectId,
        ref : 'User'
    },
    orderId : {
        type : String,
        required : [true,'Please provide a orderId'],
        unique : true
    },
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : 'Product'
    },
    productDetails : {
        name : String,
        image : Array,
    },
    paymentId : {
        type : String,
        default : ''
    },
    paymentStatus : {
        type : String,
        default : ''
    },
    deliveryAddress : {
        type : mongoose.Schema.ObjectId,
        ref : 'Address'
        
    },
    subTotalAmount : {
        type : Number,
        default : 0
    },
    invoice_recept : {
        type : String,
        default : ''
    },
},{
    timestamps : true
});
const OrderModel = mongoose.model('Order', orderSchema);
module.exports = OrderModel;