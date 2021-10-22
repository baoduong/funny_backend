import mongoose from 'mongoose';
import UserShema from '../schema/user';
import VideoShema from '../schema/video';

const UserModel = mongoose.model("User", UserShema);
const VideoModel = mongoose.model("Video", VideoShema);

export { UserModel, VideoModel };