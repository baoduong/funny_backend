import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const uri = process.env.MONGODB_URI;

export class Connection {
    public connect() {
        mongoose.connect(String(uri));
    }
}