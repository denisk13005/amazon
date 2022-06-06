const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

//donne l'accés au dossier build pour le serveur
app.use(express.static('client/build'))
const port = process.env.PORT || 8080

app.post('/stripe/charge', cors(), async (req, res) => {
    let { amount, id } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'EUR',
            description: 'Example charge',
            payment_method: id,
            confirm: true,
        })
        console.log(payment)
        res.json({
            success: true,
            message: 'Payment successful',
        })
    } catch (err) {
        console.log(err)
        res.json({
            success: false,
            message: 'Payment failed',
        })
    }
})

//permet d'accéder a notre fichier build en production
app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})
