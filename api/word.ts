import { WordService } from "../services/word";

const wordAPI = {
    find: async (req: { query: any; }, res: { json: (arg0: any) => void; }, next: (arg0: unknown) => void) => {
        try {
            const words = await WordService.find();
            res.json(words);
        } catch (error: any) {
            error.msg = "failed to retrieve posts";
            next(error);
        }
    },
    save: async (req: any, res: any, next: any) => {
        try {
            const post = await WordService.save(req.body);
            res.json(post);
        } catch (error: any) {
            error.msg = "failed to create post";
            next(error);
        }
    },
}

export default wordAPI;