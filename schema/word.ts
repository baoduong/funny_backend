import mongoose from 'mongoose';

const WordShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export default WordShema;