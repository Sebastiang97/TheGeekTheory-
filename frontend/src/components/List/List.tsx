import { Product } from "@/Models/Product"
import { Card } from "@@/Card/Card"
import  "./list.css"

export interface Props {
    products: Product[]
    children?: React.ReactElement | React.ReactElement[]
    className?: string
    style?: React.CSSProperties 
}

export const List = ({products, className, style}: Props) => {
  return (
    <section className={className} style={style}>
        {
            products.map(({id, price, name})=>(
                <Card
                    key={id}
                    className={"card"}
                    style={""}
                    img="https://images7.alphacoders.com/130/1305464.jpg" 
                    price={price} 
                    name={name} 
                />
            ))
        }
        
    </section>
  )
}
