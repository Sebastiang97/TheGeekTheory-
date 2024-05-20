import { BaseEntity } from "../../common/Domain/BaseEntity";

export class Product extends BaseEntity{
    constructor(
        public id: string,
        public name: string,
        public description:string,
        public price: number,
        public categoryId: string,
        public size: string,
        public color: string,
        public quantity: number,
        public subCategoryId: number,
        public urlImage?: any[],
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