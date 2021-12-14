import { getRepository } from "typeorm";
import { Video } from "../entities/Videos";



export class GetAllVideosService{

    async execute(){

        const videoRepo= getRepository(Video)
        
        const videos = await videoRepo.find(
            {
                relations:['category'],
                skip:0,
                take:10,
            }
        )

        return videos
    }

}