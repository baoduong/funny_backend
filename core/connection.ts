import mongoose from 'mongoose';

export class Connection {
    public connect() {
        mongoose.connect("mongodb://localhost:27017/englishApp");
    }
}