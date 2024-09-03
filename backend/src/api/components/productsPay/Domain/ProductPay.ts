import { BaseEntity } from "../../common/Domain/BaseEntity";

export class ProductPay extends BaseEntity{
    constructor(
        public id: string,
        public name: string,
        public description:string,
        public price: number,
        public size: string,
        public color: string,
        public typeStamping:string,
        public quantity: number,
        public payId: string,
        public urlImage?: any[],
        public print?: any
    ){
        super(id)
    }
}