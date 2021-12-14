import { getRepository } from "typeorm";
import { Video } from "../entities/Videos";




export class GetVideoService{

    async execute(id:string)
    {
        const videoRepo=getRepository(Video)

        const video = await videoRepo.findOne(id)

        if(!video)
            return new Error ("filme does not exists!")
        
        return video 
    }

}