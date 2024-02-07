import { uploadImages } from "../../../store/images/cloudinary.js";
import { baseRoutes } from "../common/base.routes.js";

let router = baseRoutes("print").getRoutes()

router.post("/upload/print", async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('Ningún archivo fue subido.');
    }
    const images = Array.isArray(req.files.file) ? req.files.file : [req.files.file]
    const imagesUpload = await uploadImages(images)
    console.log({ imagesUpload })

    return res.status(200).json({ message: "hello" })
})

export default router;
