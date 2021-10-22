import mongoose from 'mongoose';
import WordShema from '../schema/word';
const WordModel = mongoose.model("Word", WordShema);

export { WordModel };