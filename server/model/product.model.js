const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type: String,
    },
    image : {
        type: Array,
        default : []
    },
    categoryId : [
        {
            type: mongoose.Schema.ObjectId,
            ref : 'category'
        },
    ],
    subCategory : [
        {
            type: mongoose.Schema.ObjectId,
            ref : 'subCategory'
        },
    ],
    unit : {
        type: String,
        default : null
    },
    stock : {
        type: Number,
        default : null
    },
    price : {
        type: Number,
        default : null
    },
    discount : {
        type: Number,
        default : null
    },
    description : {
        type: String,
        default : ""
    },
    more_details : {
        type: Array,
        default : {}
    },
    publish : {
        type: Boolean,
        default : true
    },
},{
    timestamps : true
});
const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;