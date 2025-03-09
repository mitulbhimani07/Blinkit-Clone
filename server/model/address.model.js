const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    address_line : {
        type: String,
        required: [true,'Please provide a address line'],
        default : ''
    },
    city : {
        type: String,
        required: [true,'Please provide a city'],
        default : ''
    },
    state : {
        type: String,
        required: [true,'Please provide a state'],
        default : ''
    },
    pincode : {
        type: Number,
        required: [true,'Please provide a pincode'],
        default : null
    },
    country : {
        type: String,
        required: [true,'Please provide a country'],
        default : ''
    },
    mobile : {
        type: Number,
        required: [true,'Please provide a mobile number'],
        default : null
    },
    createdAt : {
        type: Date,
        default : ''
    },
    status : {
        type: Boolean,
        default : true
    }

},{
    timestamps : true
});
const AddressModel = mongoose.model('Address', addressSchema);
module.exports = AddressModel;