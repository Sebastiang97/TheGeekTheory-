import { Request, Response } from "express";
import { ProductService } from "../Domain/ProductService";
import { GetProducts } from "../Application/GetProducts";
import { ResourceImageService } from "../../common/Domain/ResourceImageService";
import { productDTOSchema } from "./SchemaValidation/ProductSchema";
import { CreateProduct } from "../Application/CreateProduct";
import { FileArray } from "express-fileupload";
import { CategoryProduct } from "../../common/Domain/CategoryProduct";
import { PrismaRepository } from "../../../../store/prisma/PrismaRepository";
import { Product } from "../Domain/Product";
import { generateId } from "../../../../libs/uuid";
  

export class ProductController {
    constructor(
        private service: ProductService,
        private imageService: ResourceImageService,
        private categoryRepository: PrismaRepository<CategoryProduct>
    ){
    }

    list = (_: Request, res: Response, ) => {
        new GetProducts(this.service)
            .execute()
            .then(products => res.json( products ))
            .catch(error => res.status( 400 ).json( { error } ))
    }

    getById = (_: Request, __: Response, ) => {
        return
    }

    create = (req: Request, res: Response, ) => {
        const product = {
            id: generateId(),
            name: req.body.name as string,
            price: parseFloat(req.body.price),
            categoryId: parseInt(req.body.categoryId)
        }
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({error: 'No se ha encontrado ningún archivo.'})
        }
          
        const result = productDTOSchema.safeParse(product)
        if(!result.success){
            console.log(result.error)
            return res.status(400).json({error: 'El recurso enviado no cumple'})
        }
        let newProduct: Product 
        return new CreateProduct(this.service)
            .execute(product)
            .then(product => {
                newProduct = product
                return this.imageService.uploadImages(req.files as FileArray)
                    .then(uploadResult => {
                        newProduct.urlImage = uploadResult
                        console.log({uploadResult, newProduct})
                        return uploadResult 
                    })
            })
            .then(() => {
                
                let categoryProduct: CategoryProduct = {
                    id: generateId(),
                    categoryId: newProduct.categoryId.toString(),
                    productId: newProduct.id
                }
                
                return this.categoryRepository.create(categoryProduct)
                    .then(() => {
                        return categoryProduct 
                    })
            })
            .then(() => {
                console.log({newProduct})
                return res.status(200).json(newProduct)
            })
            .catch(error => {
                console.log(error)
                return res.status( 400 ).json( { error } )
            })
        // return new CreateProduct(this.service,this.imageService)
        //     .execute(product, req.files)
        //     .then(product => res.json( product ))
        //     .catch(error => res.status( 400 ).json( { error } ))

    }

    update = (_: Request, __: Response, ) => {
        return
        
    }

    delete = (_: Request, __: Response, ) => {
        return
    }
}