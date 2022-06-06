import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { reset } from "../../utils/Redux-toolkit/products"
import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import axios from "axios"
import "./checkoutForm.scss"

const CheckoutFormBuild = () => {
  const dispatch = useDispatch()
  const totalPrice = useSelector((state) => state.products.totalPrice)
  const stripe = useStripe()
  const elements = useElements()

  const [err, seterr] = useState("")
  const [processed, setProcessed] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessed(true)
    if (elements == null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    if (!error) {
      console.log("paiement généré", paymentMethod)
      seterr("")

      //envoi du token au backend
      try {
        const { id } = paymentMethod
        const response = await axios.post("/stripe/charge", {
          id,
          amount: totalPrice * 100,
        })
        console.log(response)
        if (response.data.success) {
          alert("paiement effectué")
          setProcessed(false)
          dispatch(reset())
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log(error.message)
      seterr(error.message)
      setProcessed(false)
    }
  }

  return (
    <form
      className="checkoutForm"
      onSubmit={handleSubmit}
      style={{ padding: "10px" }}
    >
      <CardElement style={{ width: "100% !important" }} />
      <div style={{ color: "red", fontWeight: "normal" }}>{err}</div>
      <button
        className="payBtn"
        type="submit"
        disabled={!stripe || !elements || processed}
      >
        Payer {totalPrice.toFixed(2)}€
      </button>
    </form>
  )
}

const stripePromise = loadStripe(
  "pk_test_51L4iIZK8J6YcJIPL93lpBPiRdRyF2z8KW6vfU5h8xQ1bC6Xtk6k24EPX0Z7OTdCeTodmcF4geq0XSPA8xV4F2BJU00QiIVyLXR"
)

const checkoutForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFormBuild />
    </Elements>
  )
}
export default checkoutForm
