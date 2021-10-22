import { UserService } from "../services/user.services";

const userAPI = {
    find: async (req: any, res: any, next: any) => {
        try {
            const users = await UserService.find();
            res.json(users);
        } catch (error: any) {
            error.msg = "failed to retrieve user";
            next(error);
        }
    },
    save: async (req: any, res: any, next: any) => {
        try {
            const { email, password } = req.body;
            const post = await UserService.save(email, password);
            res.json(post);
        } catch (error: any) {
            error.msg = "failed to create user";
            next(error);
        }
    },
}

export default userAPI;