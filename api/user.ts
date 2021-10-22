import { UserService } from "../services/user.services";

const userAPI = {
    save: async (req: any, res: any, next: any) => {
        try {
            const { email, password } = req.body;
            const user = await UserService.save(email, password);
            res.status(200).json({
                data: user
            });
        } catch (error: any) {
            console.log('error', error.code)
            if (error.code == 11000) {
                res.status(400).json({
                    message: 'Failed to create user'
                })
            }
        }
    },
    auth: async (req: any, res: any, next: any) => {
        try {
            const { email, password } = req.body;
            const users = await UserService.auth(email, password);
            if (users.length > 0) {
                res.json(users[0]);
            } else {
                res.status(204).json({})
            }

        } catch (error: any) {
            error.msg = "failed to retrieve user";
            next(error);
        }
    }
}

export default userAPI;