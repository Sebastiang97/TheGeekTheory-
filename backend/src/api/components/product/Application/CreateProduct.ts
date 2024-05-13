import { Product } from "../Domain/Product";
import { ProductService } from "../Domain/ProductService";

export class CreateProduct {
    constructor(
        private productService:ProductService,
    )
    {}

    // async execute(product:Product, files: FileArray): Promise<Product>{
    async execute(product:Product): Promise<Product>{
        return this.productService.create(product)
        
        // try {
            // let newProduct: Product = await this.productService.create(product)
            // newProduct.urlImage = await this.imageService.uploadImages(files, newProduct.id)
            // return newProduct
            
        // } catch (error) {
            
        // }
            
    }
}