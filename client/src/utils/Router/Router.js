import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../../components/Header/Header"
import Basket from "../../pages/Basket/Basket"
import Connection from "../../pages/Connection/Connection"
import Home from "../../pages/Home/Home"
import Payment from "../../pages/Payment/Payment"
import UserOrder from "../../pages/userOrder/UserOrder"

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Connection />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/userOrder" element={<UserOrder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes
