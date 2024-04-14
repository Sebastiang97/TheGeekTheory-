import { Router } from "express";
// import { ProductServiceImpl } from "./ProductServiceImpl";
import { ProductController } from "./Product.controller";
import { getRepo } from "../../common/Infrastructure/GetRepo";
import { Product } from "../Domain/Product";
import { ProductServiceImpl } from "./ProductServiceImpl";
import { ResourceImageServiceImpl } from "../../common/Infrastructure/ResourceImageServiceImpl";
import { ResourceImage } from "../../common/Domain/ResourceImage";
// import { Category } from "../../category/Domain/Category";
// import { CategoryServiceImpl } from "../../category/Infraestructure/ProductServiceImpl";
import { CategoryProduct } from "../../common/Domain/CategoryProduct";
// import { baseRoutes } from "../../common/base.routes.js";



// let router = baseRoutes("product").getRoutes()


// export default router;

export class ProductRoutes{
    static get routes(): Router {
        const router = Router();
        const productRepository = getRepo<Product>("product")
        const productImageRepository = getRepo<ResourceImage>("productImage")
        const categoryRepository = getRepo<CategoryProduct>("categoryProduct")
        const productImageServiceImpl = new ResourceImageServiceImpl(productImageRepository)
        const productServiceImpl = new ProductServiceImpl(productRepository)
        const productController = new ProductController(
            productServiceImpl,
            productImageServiceImpl,
            categoryRepository)
        

        router.get("/", productController.list)

        router.get("/:id", productController.getById)

        router.post("/", productController.create)

        router.put("/:id", productController.update)

        router.delete("/:id", productController.delete)
        
        return router
    }
}