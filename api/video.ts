import { VideoService } from "../services/video.services";

const videoAPI = {
    save: async (req: any, res: any, next: any) => {
        try {
            const { name, description } = req.body;
            const video = await VideoService.save(name, description);
            res.status(200).json({
                data: video
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
    fetch: async (req: any, res: any, next: any) => {
        try {
            const videos = await VideoService.fetch();
            res.json(videos);

        } catch (error: any) {
            error.msg = "failed to retrieve user";
            next(error);
        }
    }
}

export default videoAPI;