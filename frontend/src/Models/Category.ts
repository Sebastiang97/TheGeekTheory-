import { Product } from "./Product"

export type Category = {
    id: string
    categoryName: string
    products?: Product[]
}