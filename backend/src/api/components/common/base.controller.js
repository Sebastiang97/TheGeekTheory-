import { deleteImage, uploadImages } from "../../../store/images/cloudinary.js"
import { baseService } from "./base.service.js"

const list = async (req, res, next, table) => {
    try {
        const obj = await baseService.list(table)
        return res.status(200).json(obj)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const get = async (req, res, next, table) => {

    try {
        const id = req.params.id;
        const obj = await baseService.getById(table, parseInt(id))
        if (!obj) {
            return res.status(400).json({ error: "that id isn't exists" })
        }
        return res.status(200).json(obj)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const create = async (req, res, next, table) => {
    try {
        const obj = req.body
        if(!req.files){
            return res.status(400).json({error: 'Ningún archivo fue subido.'});
        }
        if (req.files || Object.keys(req.files).length) {
            if(obj.categoryId){
                obj.categoryId = parseInt(obj.categoryId)
            }
            const objBd = await baseService.create(table, {
                ...obj
            })
            const images = Array.isArray(req.files.file) ? req.files.file : [req.files.file]
            const imagesUpload = await uploadImages(images)
    
            const imgs = imagesUpload.map(async img=> {
               
                const objImages = await baseService.create(table+"Image",
                    {
                        url: img,
                        [table+"Id"]: objBd.id
                    }
                )
                return objImages
            })

            if(table === "product"){
                const SubCategoryProduct = await baseService.create("SubCategoryProduct",
                {
                    productId:  objBd.id,
                    categoryId:  objBd.categoryId
                })
                console.log({SubCategoryProduct})
            }
            
            objBd.urlImage = []
            objBd.urlImage= await Promise.all(imgs)
            return res.status(200).json(objBd)
        }else{
            return res.status(400).json({error: 'Ningún archivo fue subido.'});
        }
        

    } catch (error) {
        console.log({error})
        return res.status(400).json({ error })
    }
}

const update = async (req, res, next, table) => {

    try {
        let obj = req.body
        const id = req.params.id
        await baseService.updateById(table, parseInt(id), obj)
        return res.status(200).json(obj)
    } catch (error) {
        console.log({ error })
        return res.status(400).json({ error })
    }

}

const deletebyId = async (req, res, next, table) => {
    try {
        const id = req.params.id;
        const obj = await baseService.deleteById(table, parseInt(id))
        return res.status(200).json(obj)
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error })
    }
}

const deleteImagebyId = async (req, res, next, table) => {
    try {
        const {id} = req.params;
        const objIma = await baseService.getById(table, parseInt(id))
        
        const result = await deleteImage(objIma.url)
        if(result.result == "ok"){
            const obj = await baseService.deleteById(table, parseInt(id))
            return res.status(200).json(obj)
        }else{
            return res.status(400).json({error: "no se pudo borrar la imagen"})
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error })
    }
}

export const baseController = {
    list,
    get,
    create,
    update,
    deletebyId,
    deleteImagebyId
}