import { Router } from "express"
import { CreateCategoryController } from "./src/controllers/CreateCategoryController";
import { CreateVideoController } from "./src/controllers/CreateVideoController";
import { DeleteCategoryController } from "./src/controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./src/controllers/GetAllCategoriesController";
import { UpdateCategoryController } from "./src/controllers/UpdatecategoryController";




const routes =Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id",new UpdateCategoryController().handle)

routes.post("/videos", new CreateVideoController().handle)



export{routes}