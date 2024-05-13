import { Category } from "../Domain/Category";
import { CategoryService } from "../Domain/CategoryService";

export class CreateCategory {
    constructor(
        private categoryService:CategoryService,
    )
    {}

    async execute(category:Category): Promise<Category>{
        
        return  this.categoryService.create(category)
        // try {
            // let newProduct: Category = await this.categoryService.create(category)
            // newProduct.urlImage = await this.imageService.uploadImages(files, newProduct.id)
            // return newProduct
            
        // } catch (error) {
            
        // }
            
    }
}