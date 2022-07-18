const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const carSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "userData",
        required: true,
        unique: true,
        trim: true
    },
    items: [{
        productId: {
            type: ObjectId,
            ref: "Products",
            required: true,
            trim: true
        },
        quantity: {
            type: Number,
            required: true,
            trim: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
        comment: "Holds total price of all the items in the cart"
    },
    totalItems: {
        type: Number,
        required: true,
        trim: true,
        comment: "Holds total number of items in the cart"
    }
}, { timestamps: true })


module.exports=mongoose.model('cartPro',carSchema)