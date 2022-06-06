import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../../components/Header/Header"
import Basket from "../../pages/Basket/Basket"
import Connection from "../../pages/Connection/Connection"
import Home from "../../pages/Home/Home"
import Payment from "../../pages/Payment/Payment"

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Connection />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/payment" om element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes
