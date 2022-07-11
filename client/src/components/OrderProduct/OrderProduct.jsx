import React from "react"
import "./orderProduct.scss"

const OrderProduct = () => {
  return (
    <div className="orderProductContainer">
      <header className="headerOrderProduct">
        <div className="leftContain">
          <div className="dateOrder">
            <p>Commande effectuée le</p>
            <span>date</span>
          </div>
          <div className="totalOrder">
            <p>Total</p>
            <span>total</span>
          </div>
          <div className="deliveryOrder">
            <p>Livraison à</p>
            <span>user name</span>
          </div>
        </div>
        <div className="rightContain">
          <div className="orderNumber">
            <p>N° de commande</p>
            <span>numéro</span>
          </div>
        </div>
      </header>
      <section className="sectionOrderProduct">
        <div className="left">
          <div className="delivery"></div>
          <div className="imgAndDesc">
            <div className="imgContainer">
              <img src="" alt="" />
            </div>
            <div className="descContainer">
              <div className="description"></div>
              <button>Acheter à nouveau</button>
            </div>
          </div>
        </div>
        <div className="right">
          <button className="btn first">Suivre votre colis </button>
          <button className="btn ">Problème avec la commande</button>
          <button className="btn last">Annuler des articles</button>
        </div>
      </section>
      <div className="archive">Archiver la commande</div>
    </div>
  )
}

export default OrderProduct
