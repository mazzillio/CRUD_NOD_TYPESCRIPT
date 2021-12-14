import {Request,Response} from "express"
import { GetVideoService } from "../services/GetVideoService"



export class GetVideoController{

    async handle(req:Request,res:Response)
    {
        const {id}=req.params

        const videoService = new GetVideoService()

        const video = await videoService.execute(id)

        if(video instanceof Error)
            return res.status(404).json(video.message)

        return res.json(video)

    }
}