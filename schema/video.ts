import mongoose from 'mongoose';

const VideoShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
})

export default VideoShema;