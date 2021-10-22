import mongoose from 'mongoose';

const UserShema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default UserShema;