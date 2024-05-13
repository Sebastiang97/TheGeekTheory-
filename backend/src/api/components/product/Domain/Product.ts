import { BaseEntity } from "../../common/Domain/BaseEntity";

export class Product extends BaseEntity{
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public categoryId: string,
        public quantity: number,
        public description:string,
        public color: string,
        public size: string,
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