import { Items } from "mercadopago/dist/clients/commonTypes"
import { ProductPay } from "../Domain/ProductPay";

export class MapperProductPayToItemsMP {
    constructor(    )
    {}

    execute(productsBd:ProductPay[]): Promise<Items[]>{
        return new Promise((resolve, _)=>{
            let itemsMp: Items[] = []
            productsBd.map(pro=>{
                itemsMp.push({
                    id: pro.id,
                    title: pro.name,
                    description: pro.description,
                    picture_url: pro.urlImage?.length ? pro.urlImage[0].url : "",
                    category_id: "",
                    quantity: 1,
                    currency_id: "COP",
                    unit_price: 1000,
                })
            })
            
            resolve(itemsMp)
            
        })
    }

}