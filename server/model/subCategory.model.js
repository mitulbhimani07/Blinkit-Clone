const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subCategorySchema = new Schema({
    name:{
        type : String,
        default : ""
    },
    image:{
        type : String,
        default : ""
    },
    category : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'category'
        }
    ]
},{
    timestamps : true
})
const subCategoryModel = mongoose.model('subCategory',subCategorySchema);
module.exports = subCategoryModel;