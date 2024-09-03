import { itemCard } from '@/Models/itemCart'
import { Product } from '@/Models/Product'
import { create } from 'zustand'

interface Props<T> {
    items: itemCard<T>[],
    addProduct: (product: Product, quantity:number) => void
    deleteProduct: (id: string)=>void
}

export const useCartStore = create<Props<Product>>(
    (set, get) => ({
        items: [],
        addProduct: (product: Product, quantity: number) =>{
            const items = get().items
            if(items.length){
                let isEqual = false
                items.map(i => {
                    if(i.item.id === product.id){
                        isEqual = true
                        i.quantity += quantity
                    }
                })

                if(!isEqual){
                    items.push({
                        item: product,
                        quantity: quantity
                    })
                }
            }
            if(!items.length){
                items.push({
                    item: product,
                    quantity: quantity
                })
            }
            set({items})
        },
        deleteProduct: (id: string)=>{
            let items = get().items
            items = items.filter(product => product.item.id !== id)
            set({items})
        }

    })
)