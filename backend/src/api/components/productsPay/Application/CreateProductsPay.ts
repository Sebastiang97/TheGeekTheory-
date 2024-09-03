import { ProductPay } from "../Domain/ProductPay";
import { ProductPayService } from "../Domain/ProductPayService";

export class CreateProductsPay {
    constructor( private productPayService: ProductPayService )
    {}

    execute(productsPay: ProductPay[], payId: string): Promise<ProductPay[]>{
        console.log({productsPay})
        const res = productsPay.map( async d =>{
            d.payId = payId
            const result = await this.productPayService.create(d)
            return result
          })
        return Promise.all(res)
    }

}