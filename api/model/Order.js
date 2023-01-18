import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderdetailsSchema = new Schema({
    name: String,
    email: String,
    address: String,
    phone: Number,
    orderdetails: Array,
    createdAt: { type: Date, default: new Date() }
});

const Order_Model = mongoose.model('orders', orderdetailsSchema)

export default Order_Model