import React from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import PleaseLogin from "../../components/PleaseLoggin/PleaseLogin"
import { AiOutlineSearch } from "react-icons/ai"
import "./userOrder.scss"
const UserOrder = () => {
  const order = useSelector((state) => state.products.products)
  // const userLoggedIn = useSelector((state) => state.user.userLoggedIn)
  const userLoggedIn = true
  console.log(userLoggedIn)
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
                />
                <button className="orderBtn">Rechercher</button>
              </div>
            </header>
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
