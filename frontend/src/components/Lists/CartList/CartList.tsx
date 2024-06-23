import { Purchase } from "@@/Purchase/Purchase"
import "./cartList.css"

export const CartList = () => {
    return (
        <section className="cart">
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
                            Descuento
                        </p>
                        <p className="price">
                            $00.000
                        </p>
                    </section>
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
                    <section className="item">
                        <p className="content">
                            Impuestos
                        </p>
                        <p className="price">
                            $00.000
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
    )
}
