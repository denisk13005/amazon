import React from "react"
import "./orderProduct.scss"

const Ordered = ({ products, totalPrice, userName, transactionDate }) => {
  return (
    <div className="orderProductContainer">
      <header className="headerOrderProduct">
        <div className="leftContain">
          <div className="dateOrder">
            <p>Commande effectuée le</p>
            <span>{transactionDate}</span>
          </div>
          <div className="totalOrder">
            <p>Total</p>
            <span>{totalPrice}€</span>
          </div>
          <div className="deliveryOrder">
            <p>Livraison à</p>
            <span>{userName}</span>
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
          <div className="delivery">Livraison prévue le : </div>
          {products.map((product, id) => (
            <div key={id} className="imgAndDesc">
              <div className="imgContainer">
                <img src={product.img} alt="" />
              </div>
              <div className="descContainer">
                <div className="description">{product.description}</div>
                <button>Acheter à nouveau</button>
              </div>
            </div>
          ))}
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

export default Ordered
