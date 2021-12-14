import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


export class DeleteCategoryService{

    async execute(id:string)
    {
        const categoryRepo= getRepository(Category)

        const category = await categoryRepo.findOne(id)

        if(!category)
            return new Error ("category does not exists")

        await categoryRepo.delete(id)
    }
}