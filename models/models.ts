import mongoose from 'mongoose';
import UserShema from '../schema/user';
const UserModel = mongoose.model("User", UserShema);

export { UserModel };