import { Request,Response} from "express"
import { GetAllCategoriesService } from "../services/GetAllCategoryService"

export class GetAllCategoriesController{

    async handle(req:Request,res:Response)
    {
        const categoriesService = new GetAllCategoriesService()

        const categories = await categoriesService.execute()

        res.json(categories)
    }
}