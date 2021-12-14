import {Request,Response} from "express"
import { DeleteVideoService } from "../services/DeleteVideoService"

export class DeleteVideoController{
    async handle(req:Request,res:Response)
    {
        const {id}=req.params

        const videoService = new DeleteVideoService()

        const r_video = await videoService.execute(id)

        if(r_video instanceof Error)
            return res.status(404).json(r_video.message)
        
        return res.status(204).end()
    }
}