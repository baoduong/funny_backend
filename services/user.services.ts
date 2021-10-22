import { UserModel } from '../models/models';

export abstract class IUserServices {
    abstract find(params: any): void;
    abstract save(params: any): void;
}

export class UserService {

    static auth(email: string, password: string) {
        const query = { email: email, password: password }
        return UserModel.find(query)
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