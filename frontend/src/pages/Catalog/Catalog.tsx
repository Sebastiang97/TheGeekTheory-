import { PreviewProducts } from "@@/PreviewProducts/PreviewProducts"
import "./catalog.css"
import { Counter } from "@@/Counter/Counter"

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyKLruSfEAA-JE92BS3K8fkicfgvrFt5hHLfJvKzzrA&s",
    "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/11/Quien-es-Spike-Spiegel-el-cazarrecompensas-mas-buscado-de-toda-la-galaxia.png?resize=1280%2C959&quality=80&ssl=1",
]
export const Catalog = () => {
  return (
    <>
        <section className="categories">
            <div className="container">
                {
                    Array.from({ length: 3 }, (_, i) => (
                        <button key={i}>
                            Cateogria
                        </button>
                    ))
                }
            </div>
        </section>

        <section className="products">
            <article className="cardProducts">
                <div className="preview">
                    {/* <div className="container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t1F3K4E705RDJowH--S6HhkXRRsYV7KITYCVQrMYyQ&s" alt="" />
                    </div> */}
                    <PreviewProducts 
                        images={images}
                        currentImage={images[0]}
                    />
                </div>
                <section className="info">
                    <header>
                        <h3>
                            Interior
                        </h3>
                        <small>COP<span>35.000</span></small>
                    </header>
                    <p className="content">
                        Ropa interior de 100% algodón, suave higiénica y 
                        permite el paso del aire en tu zona íntima. 
                        Increíblemente cómoda y perfecta para uso diario.
                    </p>
                    <section className="colors">
                        <header>
                            <h4>Color</h4>
                        </header>
                        <div className="listColors">
                            {
                                Array.from({ length: 6 }, (_, i) => (
                                    <div key={i}></div>
                                ))
                            }
                        </div>
                    </section>

                    <section className="sizes">
                        <header>
                            <h4>Size</h4>
                        </header>
                        <div className="listSize">
                            {
                                Array.from({ length: 6 }, (_, i) => (
                                    <div key={i}>S</div>
                                ))
                            }
                        </div>
                        <p className="content">Guia de tallas</p>
                    </section>

                    <section className="actions">
                        <div className="add">
                            <button>Agregar a tu carrito</button>
                        </div>
                        <Counter initialState={1}/>
                    </section>

                    <section className="charges">
                        <p className="content">Cargos</p>
                    </section>

                </section>
            </article>
        </section>
    </>
  )
}

