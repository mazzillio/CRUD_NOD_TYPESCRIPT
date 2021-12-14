import {Request,Response} from "express"
import { UpdateVideoService } from "../services/UpdateVideoService"


export class UpdateVideoController{

    async handle(req:Request,res:Response){

        const {id}=req.params
        const {name,duration,category_id}=req.body

        const videoService = new UpdateVideoService()

        const video = await videoService.execute({id,name,duration,category_id})

        if(video instanceof Error)
            return res.status(400).json(video.message)
        
        return res.json(video)

    }


}