import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


interface ICategoryRequest{
    name:string
    description:string
}
export class CreateCategoryService{


    async execute({name,description}:ICategoryRequest):Promise<Category | Error>{

        const categoryRepo = getRepository(Category)

        const existsCategory= await categoryRepo.findOne({name})
        
        if(existsCategory)
            return new Error("category already exists");
            

        const category =categoryRepo.create({
            name,
            description
        })
        await categoryRepo.save(category)
        
        return category
    }

}