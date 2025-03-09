const mongoose = require('mongoose');
const { schema } = require('./user_model');
const Schema = mongoose.Schema;

const categorySchema = new schema({
    name:{
        type:String,
        default:""
    },
    image : {
        type:String,
        default:""
    },
},{
    Timestamps : true
});
const categoryModel = mongoose.model('category',categorySchema);
module.exports = categoryModel;