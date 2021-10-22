import { UserModel } from '../models/models';

export abstract class IUserServices {
    abstract find(params: any): void;
    abstract save(params: any): void;
}

export class UserService {

    static find() {
        return UserModel.find({})
    }

    static async save(email: string, password: string) {
        const userCollection = new UserModel({
            email: email,
            password: password
        });
        await userCollection.save();
        return userCollection;
    }
}