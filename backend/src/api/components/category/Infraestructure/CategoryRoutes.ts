import { Router } from "express";
import { CategoryController } from "./Category.controller";
import { getRepo } from "../../common/Infrastructure/GetRepo";
import { CategoryServiceImpl } from "./CategoryServiceImpl";
import { ResourceImage } from "../../common/Domain/ResourceImage";
import { ResourceImageServiceImpl } from "../../common/Infrastructure/ResourceImageServiceImpl";
import { Category } from "../Domain/Category";
import { CategoryProductServiceImpl } from "../../common/Infrastructure/CategoryProductServiceImpl";
import { CategoryProduct } from "../../common/Domain/CategoryProduct";
// import { AuthMiddleware } from "../../auth/infraestructure/AuthMiddleware";



// let router = baseRoutes("product").getRoutes()


// export default router;

export class CategoryRoutes{
    static get routes(): Router {
        const router = Router();
        const categoryRepository = getRepo<Category>("category")
        const productImageRepository = getRepo<ResourceImage>("categoryImage")
        const categoryProductRepository = getRepo<CategoryProduct>("categoryProduct")

        const categoryProductServiceImpl = new CategoryProductServiceImpl(categoryProductRepository)
        const resourceImageServiceImpl = new ResourceImageServiceImpl(productImageRepository)
        const categoryServiceImpl = new CategoryServiceImpl(categoryRepository)

        const productController = new CategoryController(categoryServiceImpl, categoryProductServiceImpl, resourceImageServiceImpl, )
        

        // router.get("/", AuthMiddleware.hasAdmin, productController.list)

        // router.get("/:id", AuthMiddleware.hasAdmin, productController.getById)
        
        router.get("/", productController.list)

        router.get("/:id", productController.getById)
        
        router.get("/products/:categoryId", productController.getProducts)

        router.post("/", productController.create)

        router.put("/:id", productController.update)

        router.delete("/:id", productController.delete)
        
        return router
    }
}