import { Request, Response } from "express";
import { CategoryService } from "../Domain/CategoryService";
import { categorySchema } from "./SchemaValidation/CategorySchema";
import { CreateCategory } from "../Application/CreateCategory";
import { GetCategories } from "../Application/GetCategories";
import { ResourceImageService } from "../../common/Domain/ResourceImageService";
import { FileArray } from "express-fileupload";
import { CreateResourceImage } from "../../common/Application/CreateResourceImage";
import { Category } from "../Domain/Category";
import { CategoryProductService } from "../../common/Domain/CategoryProductService";
import { GetProductsByCategoryId } from "../../common/Application/GetProductsByCategoryId";


export class CategoryController {
    constructor(
        private service: CategoryService,
        private categoryProductService: CategoryProductService,
        private imageService: ResourceImageService
    ){
    }

    list = (_: Request, res: Response, ) => {
        new GetCategories(this.service)
            .execute()
            .then(products => res.json( products ))
            .catch(error => res.status( 400 ).json( { error } ))
    }

    getById = (_: Request, __: Response, ) => {
        return
    }

    create = (req: Request, res: Response, ) => {
        let category: Category = req.body
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({error: 'No se ha encontrado ningún archivo.'})
        }
          
        const result = categorySchema.safeParse(category)
        if(!result.success){
            return res.status(400).json({error: 'El recurso enviado no cumple'})
        }
        
        
        return new CreateCategory(this.service)
            .execute(category)
            .then(categoryEntity => {
                category = categoryEntity
                return this.imageService.uploadImages(req.files as FileArray)
            })
            .then(uploadResult => {
                return new CreateResourceImage(this.imageService)
                    .execute(uploadResult, {categoryId: category.id})
            })
            .then(resourceImage=>{
                category.urlImage = resourceImage
                return res.json(category)
            })
            .catch(error => {
                console.log(error)                
                return res.status( 400 ).json( { error } )
            })
    }

    getProducts = (req: Request, res: Response) =>{
        const categoryId: string = req.params.categoryId
        new GetProductsByCategoryId(this.categoryProductService)
            .execute(categoryId)
            .then(products => res.status(200).json(products))
            .catch(error => res.status( 400 ).json( { error } ))

    }

    update = (_: Request, __: Response, ) => {
        return
        
    }

    delete = (_: Request, __: Response, ) => {
        return
    }
}