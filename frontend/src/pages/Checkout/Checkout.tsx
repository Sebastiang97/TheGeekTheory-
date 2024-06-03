import { FormDinamic } from "@@/forms/FormDinamic"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import "./checkout.css"
import { actions, inputCheckoutFields } from "./action.constants"
import { Purchase } from "@@/Purchase/Purchase"

export const Checkout = () => {
    const getValues = () =>{

    }
    
    const getImgs = () =>{

    }
  return (
    <>
        <section className="checkout">
            <section className="infoPurshase">
                <header>
                    <h2>Checkout</h2>
                    <small><span>Dirección</span> ------ Pago  </small>
                </header>
                <header>
                    <h4>Información de envio</h4>
                </header>
                <FormDinamic
                    inputFields={inputCheckoutFields}
                    actions={actions}
                    getImgs={getImgs}
                    getValues={getValues}
                />
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
            <section className="purchases">
                <header>
                    <h4>Tus compras</h4>
                </header>
                <section className="listPurchases">
                    {
                        Array.from({ length: 6 }, (_, i) => (
                            <Purchase 
                                key={i}
                                img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s"}
                                title={"T-shirt"}
                                action={"Eliminar"}
                                size={"L"}
                                quantity={"1"}
                            />
                        ))
                    }
                </section>

                <section className="summary">
                    <section className="item">
                        <p className="content">
                            Subtotal
                        </p>
                        <p className="price">
                            $45.000
                        </p>
                    </section>
                    <section className="item">
                        <p className="content">
                            Envio
                        </p>
                        <p className="price">
                            $16.700
                        </p>
                    </section>
                    <hr />
                    <section className="item">
                        <p className="content">
                            Total
                        </p>
                        <p className="price">
                            $61.700
                        </p>
                    </section>
                    <button>Continuar</button>
                </section>
            </section>
        </section>
    </>
  )
}
