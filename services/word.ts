import { WordModel } from '../models/models';

export abstract class IWordService {
    abstract find(params: any): void;
    abstract save(params: any): void;
}

export class WordService {

    static find() {
        return WordModel.find({})
    }

    static async save(wordData: any) {
        const word = new WordModel({ ...wordData });
        await word.save();
        return word;
    }
}