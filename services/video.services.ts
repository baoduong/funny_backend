import { VideoModel } from '../models/models';

export abstract class IUserServices {
    abstract find(params: any): void;
    abstract save(params: any): void;
}

export class VideoService {

    static fetch() {
        return VideoModel.find()
    }

    static async save(name: string, description: string) {
        const videoCollection = new VideoModel({
            name: name,
            description: description
        });
        await videoCollection.save();
        return videoCollection;
    }
}