import React from "react"
import { useSelector } from "react-redux"
import "./basket.scss"

import BastketItem from "../../components/BasketItem/BastketItem"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"

const Basket = () => {
  const navigate = useNavigate()
  //redux state
  const products = useSelector((state) => state.products.products)
  const basketItems = useSelector((state) => state.products.basketItems)
  const totalPrice = useSelector((state) => state.products.totalPrice)
  console.log(totalPrice.toString().split(".")) //voir pour l'affichage des décimales en petits

  return (
    <>
      <Header />

      <div className="bannerContainer">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/08/GILFR/fr-gil_maple_vc_dt_12-2021_770x80._CB650895513_.jpg"
          alt=""
        />
      </div>
      <main className="basketMain">
        <div className="basket__left">
          <h2 className="basket__title">Votre panier</h2>
          {products &&
            products.map((product, index) => (
              <BastketItem
                description={product.description}
                price={product.price}
                img={product.img}
                smallPrice={product.smallPrice}
                stars={product.stars}
                id={product.id}
                qte={product.qte}
                key={index}
              />
            ))}
          {basketItems > 0 ? (
            <div className="subtotal">
              Sous-total ({basketItems}{" "}
              {basketItems > 1 ? "articles" : "article"}
              ):
              <span> {"€" + totalPrice.toFixed(2)}</span>
            </div>
          ) : (
            <div className="continuePurchase">
              <h2>Votre panier est vide </h2>
              <p onClick={() => navigate("/home")} className={"anim"}>
                Continuer mes achat
              </p>
            </div>
          )}
        </div>
        {!basketItems == 0 ? (
          <div className="basket__right">
            <>
              <div className="subtotal--right">
                Sous-total ({basketItems}
                {basketItems > 1 ? "articles" : "article"}
                ):
                <span> {"€" + totalPrice.toFixed(2)}</span>
                <button
                  className="command"
                  onClick={() => navigate("/payment")}
                >
                  Passer la commande
                </button>
              </div>
            </>
          </div>
        ) : null}
      </main>
    </>
  )
}

export default Basket
