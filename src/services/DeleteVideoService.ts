import { getRepository } from "typeorm";
import { Video } from "../entities/Videos";



export class DeleteVideoService{

    async execute(id:string)
    {
        const videoRepo=getRepository(Video)

        const video = await videoRepo.findOne(id)
    
        if(!video)
            return new Error("Video does not exists!")
        
        await videoRepo.delete(id)

    }

}