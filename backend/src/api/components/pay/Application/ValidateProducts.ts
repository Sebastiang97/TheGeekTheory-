import { Product } from "../../product/Domain/Product";

export class ValidateProducts {
    constructor(    )
    {}

    execute(productsBd:Product[], productsReq:any[]): Promise<Product[]>{
        return new Promise((resolve, reject)=>{

            if (productsBd.length !== productsReq.length) {
                reject("los elementos no coinciden")
            }
            
            for (let i = 0; i < productsBd.length; i++) {
                const obj1 = productsBd[i];
                obj1.price = parseFloat(obj1.price + "")
                const obj2 = productsReq.find(obj => obj.id === obj1.id);
                
                if (!obj2 || obj1.price !== obj2.price) {
                    reject("los elementos no coinciden")
                }
            }
            
            return resolve(productsReq)
            
        })
    }

}