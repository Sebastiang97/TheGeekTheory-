import { Router } from "express";
import { baseController } from "./base.controller.js";

export const baseRoutes = (table) => {
    const router = Router();

    router.get("/", (req, res, next) => baseController.list(req, res, next, table));

    router.get("/:id", (req, res, next) => baseController.get(req, res, next, table));

    router.post("/", (req, res, next) => baseController.create(req, res, next, table));

    router.put("/:id", (req, res, next) => baseController.update(req, res, next, table));

    router.delete("/:id", (req, res, next) => baseController.deletebyId(req, res, next, table));
    
    router.delete("/image/:id", (req, res, next) => baseController.deleteImagebyId(req, res, next, table+"Image"));

    function getRoutes() {
        return router
    }

    return {
        getRoutes
    }
}



// export default router;