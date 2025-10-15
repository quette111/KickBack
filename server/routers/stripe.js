import express from 'express'
import Stripe from "stripe";
import dotenv from 'dotenv';

dotenv.config();
const stripeAuth = Stripe(process.env.STRIPE_SECRET)

const routerStripe = express.Router()
routerStripe.post('/create-checkout-session', async(req, res)=> {
    console.log('in the backend area ')
    const {products} = req.body

    const lineItems = products.map((product)=> ({
        price_data:{
            currency:'usd',
            product_data:{
                name:product.title,
               // images:[product.images[parseInt(0)]]
            },
            unit_amount: Math.round(product.price * 100),
        },
        quantity: 1
    }))

    const session = await stripeAuth.checkout.sessions.create({
        payment_method_types:['card'],
        line_items:lineItems,
        mode:'payment',
        success_url:'http://localhost:5175/',
        cancel_url:"http://localhost:5175/shopAll/womens"
    })

    console.log('BACKEND BACKEND')
    res.json({ url: session.url });
})

export default routerStripe