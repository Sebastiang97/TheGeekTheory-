import { Router } from "express";
import { ProductRoutes } from "./api/components/product/Infraestructure/ProductRoutes";
import { CategoryRoutes } from "./api/components/category/Infraestructure/CategoryRoutes";

export class AppRoutes {


    static get routes(): Router {
  
      const router = Router();
  
      router.use('/api/products', ProductRoutes.routes );
      router.use('/api/categories', CategoryRoutes.routes );
      
  
  
  
      return router;
    }
  
  
  }
  