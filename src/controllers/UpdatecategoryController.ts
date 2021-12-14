import { Request,Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

export class UpdateCategoryController{

    async handle(req:Request,res:Response){
        const {id}=req.params
        const {name,description}=req.body

        const categoryService = new UpdateCategoryService()

        const newCategory = await categoryService.execute({id,name,description})

        if(newCategory instanceof Error)
            res.status(400).json(newCategory.message)
        
        return res.status(204).json(newCategory)
    }

}
