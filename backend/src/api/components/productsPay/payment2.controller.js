import { MercadoPagoConfig, Payment, Preference } from "mercadopago"

const client = new MercadoPagoConfig({ accessToken: "TEST-3803343129563183-121222-52c0c5f117fa8de805a4070da0b7275a-546599977" })

export const create = async (req, res) => {

  try {
    console.log({ client })
    const result = await new Preference(client).create({
      body: {
        items: [
          {
            id: "123456789",
            title: "Laptop",
            quantity: 1,
            unit_price: 15000,
          },
        ],
        notification_url: "https://7x1zn7jh-3000.use2.devtunnels.ms/payment/webhook",
        back_urls: {
          success: "https://7x1zn7jh-3000.use2.devtunnels.ms/payment/success",
          pending: "https://7x1zn7jh-3000.use2.devtunnels.ms/payment/pending",
          failure: "https://7x1zn7jh-3000.use2.devtunnels.ms/payment/failure",
        },
      },
    })
    // .then(data => console.log(data))
    // .catch(error => console.log(error))

    console.log(result)

    // res.json({ message: "Payment creted" })
    res.json(result.body)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export const receiveWebhook = async (req, res) => {
  try {
    const query = req.query
    console.log(query)
    if (query.type === "payment") {
      console.log(query['data.id'])
      const payment = await new Payment(client).get({
        id: query['data.id'],
      })
      let venta = {
        id: payment?.id,
        description: payment?.description,
        amount: payment?.transaction_amount
      }
      console.log({ payment, venta })
    }

    res.sendStatus(200)
  } catch (error) {
    console.log({ error })
    return res.sendStatus(200)
  }
}







