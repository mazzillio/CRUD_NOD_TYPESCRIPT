import {Request,Response} from "express"
import { CreateCategoryService } from "../services/CreateCategoryService"


export class CreateCategoryController{

    async handle(req:Request,res:Response)
    {
        const {name,description}=req.body

        const serviceCategory = new CreateCategoryService()

        
        const resp= await serviceCategory.execute({name,description})
        if(resp instanceof Error)
        {
            return res.status(400).json(resp.message)
        }
        
        return res.json(resp)
       
    }
}