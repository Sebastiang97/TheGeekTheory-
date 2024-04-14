import { Router } from "express";
import { CategoryController } from "./Category.controller";
import { getRepo } from "../../common/Infrastructure/GetRepo";
import { CategoryServiceImpl } from "./ProductServiceImpl";
import { ResourceImage } from "../../common/Domain/ResourceImage";
import { ResourceImageServiceImpl } from "../../common/Infrastructure/ResourceImageServiceImpl";
import { Category } from "../Domain/Category";



// let router = baseRoutes("product").getRoutes()


// export default router;

export class CategoryRoutes{
    static get routes(): Router {
        const router = Router();
        const categoryRepository = getRepo<Category>("category")
        const productImageRepository = getRepo<ResourceImage>("productImage")
        const productImageServiceImpl = new ResourceImageServiceImpl(productImageRepository)
        const categoryServiceImpl = new CategoryServiceImpl(categoryRepository)
        const productController = new CategoryController(categoryServiceImpl, productImageServiceImpl)
        

        router.get("/", productController.list)

        router.get("/:id", productController.getById)

        router.post("/", productController.create)

        router.put("/:id", productController.update)

        router.delete("/:id", productController.delete)
        
        return router
    }
}