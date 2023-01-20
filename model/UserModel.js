import mongoose from 'mongoose';
const { Schema } = mongoose;

const usershema = new Schema({
    name: String,
    email: String,
    password: String,
    isVerified: { type: String, default: false },
    createdAt: { type: Date, default: new Date() }
});

const User__Model = mongoose.model('users', usershema)

export default User__Model