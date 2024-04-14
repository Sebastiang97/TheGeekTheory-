import { BaseEntity } from "../../common/Domain/BaseEntity";
import { Product } from "../../product/Domain/Product";

export class Category extends BaseEntity{
    constructor(
        public id: string,
        public categoryName: string,
        public products?: Product[],
        public urlImage?: any[]
    ){
        super(id)
    }
}

// export interface Product {
//     id: string,
//     name: string,
//     price: number,
//     categoryId: number,
//     urlImage: any[]
// }