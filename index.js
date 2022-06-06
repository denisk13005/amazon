const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const stripe = require('stripe')("sk_test_51L4iIZK8J6YcJIPLZOT6VO3j0nTX0vXV4BiVYEG4fMKQ9sHUelSvCDFiHON61g7Z4ACR0Rqd7LoMlxS7k0bWLDMR00tKIdH317")

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
