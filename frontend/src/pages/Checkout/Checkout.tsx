import { FormDinamic } from "@@/forms/FormDinamic"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import "./checkout.css"
import { actions, inputCheckoutFields } from "./action.constants"
import { CartList } from "@@/Lists/CartList/CartList"

export const Checkout = () => {
    const getValues = () => {

    }

    const getImgs = () => {

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
                <CartList />
            </section>
        </>
    )
}
