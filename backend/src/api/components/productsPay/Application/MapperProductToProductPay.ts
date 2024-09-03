import { Product } from "../../product/Domain/Product";
import { ProductPay } from "../Domain/ProductPay";

export class MapperProductToProductPay {
    constructor(    )
    {}

    execute(productsBd:Product[], print: any): Promise<ProductPay[]>{
        return new Promise((resolve, _)=>{
            print
            let productsPay: any[] = []

            productsBd.map(pro=>{
                productsPay.push({
                    name: pro.name,
                    description: pro.description,
                    price: pro.price,
                    color: pro.color,
                    size: pro.size,
                    quantity: pro.quantity,
                    typeStamping: pro.typeStamping
                    // payId: "",
                    // urlImage: pro.urlImage,
                    // print: print
                })
            })
            
            resolve(productsPay as ProductPay[])
            
        })
    }

}