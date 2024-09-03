import { useEffect, useState } from "react"
import { CartList } from "@@/Lists/CartList/CartList"
import { FormDinamic } from "@@/forms/FormDinamic"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { actions, inputCheckoutFields } from "./action.constants"
import { useCartStore } from "@/libs/store/zustand/useCartStore"
import { baseService } from "@/Services/base.service"
import { Payer } from "@/Models/Payer"
import "./checkout.css"
import { usePayerStore } from "@/libs/store/zustand/usePayerStore"
import { PayerList } from "@@/Lists/PayerList/PayerList"

export const Checkout = () => {
    const items = useCartStore(state => state.items)
    const createPayer = usePayerStore(state=> state.createPayer)
    const payer = usePayerStore(state=> state.payer)
    const [add, setAdd] = useState(true)
    const [isSelectPlayer, setIsSelectPlayer] = useState(false)
    
    const [info, setInfo] = useState<Payer>({} as Payer)

    const getValues = (values:any, type:string ) => {
        if(items.length){
            console.log({values})
            createPayer(mappingUser(values))
                .then(_=>{
                    setAdd(false)
                    setInfo(mappingUser(values))
                }).catch(error=>{
                    console.log(error)
                })
        }
    }

    const mappingUser = (values:any):Payer => {
        return {
            name: values.name,
            surname: "",
            zipCode: values.zipCode || "",
            email: values.email,
            phone: values.phone,
            detailAddress: values.detail,
            address: values.address,
            city: values.city
        }
    }

    const getImgs = () => {

    }

    const pay = () => {
        let body = items.map((i:any) => {
            i.item.typeStamping = "Any" 
            return i.item
        })
        console.log({items:body, payerId: info.id})
        baseService("http://localhost:3000/api/pay")
            .create({items:body, payerId: info.id})
            .then(res=>{
                console.log({res})
                window.open(res as any, "_self")
            })
            .catch(err=>{
                console.log({err})
            })

    }
    const addPayer = ()=>{
        setAdd(true)
    }

    const selectedPayer = (payer:Payer)=>{
        setInfo(payer)
        setIsSelectPlayer(false)
    }

    useEffect(()=>{
        if(payer.length){
            setInfo(payer[0])
        }
    },[])

    return (
        <>
            <section className="checkout">
                <section className="infoPurshase">
                    <header>
                        <h2>Checkout</h2>
                        <small><span>Dirección</span> ------ Pago  </small>
                    </header>
                    <header>
                        <h4>Información de envio </h4>
                    </header>

                    {
                        (add && !info?.id) ? (
                            <FormDinamic
                                inputFields={inputCheckoutFields}
                                actions={actions}
                                getImgs={getImgs}
                                getValues={getValues}
                            />
                        ) : (
                            <section className="info">
                                <PayerList 
                                    isSelectPlayer={isSelectPlayer}
                                    payerSelected={selectedPayer}
                                />

                                {!isSelectPlayer && (
                                    <button
                                        onClick={()=> pay()}>
                                            comprar
                                    </button>
                                )}

                                <button 
                                    onClick={()=> setIsSelectPlayer(p=> !p)}>
                                    escoger otra info 
                                </button>
                                <button 
                                    onClick={()=> addPayer()}>
                                    agregar
                                </button>
                            </section>
                        )
                    }
                    
                    <header className="end">
                        <h4 >Información de tu orden</h4>
                    </header>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="btn-accordion">Politica de cambio</AccordionTrigger>
                            <AccordionContent className="accordionContent">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="btn-accordion">Opciones de envio</AccordionTrigger>
                            <AccordionContent className="accordionContent">
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
                <CartList />
            </section>
        </>
    )
}
