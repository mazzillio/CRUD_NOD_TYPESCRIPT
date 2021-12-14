import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

import { Video } from "../entities/Videos";


interface IVideoRequest{
    id:string
    name?:string
    duration?:number
    description?:string
    category_id?:string
}

export class UpdateVideoService{
    async execute({id,name,duration,category_id}:IVideoRequest):Promise<Video|Error>{

        const videoRepo=getRepository(Video)

        const video= await videoRepo.findOne(id)

        if(!video)
            return new Error("Filme does not exists!")
        
        if(category_id)
        {
            const categoryRepo=getRepository(Category)
            const category= await categoryRepo.findOne(category_id)
            
            if(!category)
                return new Error("New category does not exists!")
            
            video.category_id=category.id
        }
    
        video.name = name?name:video.name
        video.duration = duration?duration:video.duration
        video.category_id = category_id?category_id:video.category_id

        await videoRepo.save(video)

        return video

    }
}