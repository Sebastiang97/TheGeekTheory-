import { Router } from "express";
import { ProductRoutes } from "./api/components/product/Infraestructure/ProductRoutes";
import { CategoryRoutes } from "./api/components/category/Infraestructure/CategoryRoutes";
import { AuthRoutes } from "./api/components/auth/infraestructure/AuthRoutes";
import { UserRoutes } from "./api/components/user/Infraestructure/UserRoutes";
import { SubCategoryRoutes } from "./api/components/subcategory/Infraestructure/SubCategoryRoutes";

export class AppRoutes {


    static get routes(): Router {
  
      const router = Router();
  
      router.use('/api/products', ProductRoutes.routes );
      router.use('/api/categories', CategoryRoutes.routes );
      router.use('/api/subcategories', SubCategoryRoutes.routes );
      router.use('/api/auth', AuthRoutes.routes );
      router.use('/api/users', UserRoutes.routes );
      
  
  
  
      return router;
    }
  
  
  }
  