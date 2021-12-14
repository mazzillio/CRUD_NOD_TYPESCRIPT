import { getRepository } from "typeorm";
import { Category } from "../entities/Category";



export class GetAllCategoriesService{

    async execute(){
        const repoCategory = getRepository(Category)

        const categories = await repoCategory.find()

        return categories
    }
}