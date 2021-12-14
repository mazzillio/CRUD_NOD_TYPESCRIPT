import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Videos";

interface IVideoRequest{
    name:string
    description:string
    duration:number
    category_id:string
}

export class CreateVideoService{
    async execute({name,description,duration,category_id}:IVideoRequest):Promise <Video | Error>
    {
        const videoRepo= getRepository(Video)
        const categoryRepo = getRepository(Category)

        const category = await categoryRepo.findOne(category_id)

        if(!category)
            return new Error("Category does not exists!")
        

        const video = videoRepo.create({
            name,
            description,
            duration,
            category_id
        })

        await videoRepo.save(video)

        return video
    }
}