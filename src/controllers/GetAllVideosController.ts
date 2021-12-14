import {Request,Response} from "express"
import { GetAllVideosService } from "../services/GetAllVideosService"


export class GetAllVideosControler{

    async handle(req:Request,res:Response)
    {
        const videoService = new GetAllVideosService()

        const videos = await videoService.execute()

        return res.json(videos)
    }

}