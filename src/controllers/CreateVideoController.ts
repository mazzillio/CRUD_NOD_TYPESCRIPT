import { Request,Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController{

    async handle(req:Request,res:Response){
        const {name,description,duration,category_id}=req.body

        const videoService = new CreateVideoService()

        const video = await videoService.execute({name,description,duration,category_id})

        if(video instanceof Error)
            return res.status(400).json(video.message)
        
        return res.json(video)
    }


}