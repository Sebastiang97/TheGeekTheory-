import { MercadoPagoConfig, Preference } from "mercadopago";


const client = new MercadoPagoConfig({ accessToken: "" })

export const create = async (req, res) => {

  try {
    console.log({ client })
    const result = await new Preference(client).create({
      body: {
        items: [
          {
            id: "example",
            title: "Laptop",
            quantity: 1,
            unit_price: 15000,
          },
        ],
      }
      // notification_url: "https://e720-190-237-16-208.sa.ngrok.io/webhook",
      // back_urls: {
      //   success: "http://localhost:3000/success",
      //   // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
      //   // failure: "https://e720-190-237-16-208.sa.ngrok.io/failure",
      // },
    })
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    console.log(result);

    // res.json({ message: "Payment creted" });
    res.json(result.body);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    console.log(payment);
    if (payment.type === "payment") {
      const data = await mercadopage.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
