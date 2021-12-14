import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

interface ICategoryUpdateRequest{
    id:string
    name?:string
    description?:string
}

export class UpdateCategoryService{

    async execute({id,name,description}:ICategoryUpdateRequest)
    {
        const categoryRepo = getRepository(Category)

        const category= await categoryRepo.findOne(id)

        if(!category)
            return new Error("Category does not exists!")

        category.name=name ?name:category.name
        category.description=description?description : category.description

        await categoryRepo.save(category)

        return category

    }
}