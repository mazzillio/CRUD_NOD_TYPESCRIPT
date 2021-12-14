import { Router } from "express"
import { CreateCategoryController } from "./src/controllers/CreateCategoryController";
import { CreateVideoController } from "./src/controllers/CreateVideoController";
import { DeleteCategoryController } from "./src/controllers/DeleteCategoryController";
import { DeleteVideoController } from "./src/controllers/DeleteVideoController";
import { GetAllCategoriesController } from "./src/controllers/GetAllCategoriesController";
import { GetAllVideosControler } from "./src/controllers/GetAllVideosController";
import { GetVideoController } from "./src/controllers/GetVideoController";
import { UpdateCategoryController } from "./src/controllers/UpdatecategoryController";
import { UpdateVideoController } from "./src/controllers/UpdateVideoController";




const routes =Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.put("/categories/:id",new UpdateCategoryController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)

routes.post("/videos", new CreateVideoController().handle)
routes.get("/videos",new GetAllVideosControler().handle)
routes.get("/videos/:id", new GetVideoController().handle)
routes.put("/videos/:id", new UpdateVideoController().handle)
routes.delete("/videos/:id",new DeleteVideoController().handle)



export{routes}