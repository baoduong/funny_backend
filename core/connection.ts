import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

export class Connection {
    public connect() {
        mongoose.connect(String(uri));
    }
}