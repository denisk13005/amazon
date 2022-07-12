import React from "react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import PleaseLogin from "../../components/PleaseLoggin/PleaseLogin"
import Product from "../../components/Product/Product"
import { AiOutlineSearch } from "react-icons/ai"
import "./userOrder.scss"
import Ordered from "../../components/OrderProduct/OrderProduct"
const UserOrder = () => {
  //reduxState
  const reduxProducts = useSelector((state) => state.products.products)
  const totalPrice = useSelector((state) => state.products.totalPrice)
  const userName = useSelector((state) => state.user.informations[0].name)
  const transactionDate = useSelector((state) => state.products.transactionDate)

  //localState

  // const userLoggedIn = useSelector((state) => state.user.userLoggedIn)
  const userLoggedIn = true
  const [products, setProducts] = useState([])
  const loadProducts = () => {
    setProducts(reduxProducts)
  }
  useEffect(() => loadProducts(), [])

  const filteredProducts = (value) => {
    value.length > 2
      ? setProducts(products.filter((el) => el.description.includes(value)))
      : setProducts(reduxProducts)
  }
  return (
    <section className="orderSection">
      {userLoggedIn ? (
        <>
          <Header />
          <main className="orderMain">
            <header className="orderHeader">
              <h2 className="orderHeader__left"> Vos commandes</h2>
              <div className="orderHeader__right">
                <AiOutlineSearch className="searchOrderIcon" />
                <input
                  className="searchOrder"
                  type="search"
                  placeholder="Rechercher dans vos commandes"
                  onChange={(e) => filteredProducts(e.target.value)}
                />
                <button className="orderBtn">Rechercher</button>
              </div>
            </header>
            <Ordered
              products={products}
              totalPrice={totalPrice}
              userName={userName}
              transactionDate={transactionDate}
            />
          </main>
          <Footer />
        </>
      ) : (
        <PleaseLogin />
      )}
    </section>
  )
}

export default UserOrder
