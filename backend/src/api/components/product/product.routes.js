import { baseRoutes } from "../common/base.routes.js";



let router = baseRoutes("product").getRoutes()

router.get("/info/info", (req, res, next) => {
    return res.status(200).json({ message: "hello" })
})


export default router;
