import React from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../utils/Redux-toolkit/products"
import { MdAddShoppingCart } from "react-icons/md"
import "./product.scss"
/**
 *
 * @param {string} description description of the product
 * @param {number} price price of the product
 * @param {number} smallPrice cts price of the product in small format
 * @param {number} stars number of stars of the product
 * @param {string} img url of the product image
 * @param {number} id id of the product
 * @returns {JSX.Element} JSX element of the product
 */
const Product = ({ description, price, smallPrice, stars, img, id, width }) => {
  const product = { description, price, smallPrice, stars, img, id, width }
  const dispatch = useDispatch()
  const addBasket = () => {
    dispatch(addProduct(product))
  }

  return (
    <div className="product" style={{ width: width + "%" }}>
      <div className="upProductContainer">
        <p className="product__description">{description}</p>
        <p className="product__price">
          €<strong>{price}</strong>.<small>{smallPrice}</small>
        </p>
        <div className="product__stars">
          {Array(stars)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>
      <div className="imgAndButton">
        <div className="imgContainer">
          <img src={img} alt="" className="product__image" />
        </div>
        {}
        <button onClick={addBasket}>
          <span className="desktopMsg">Ajouter au panier</span>{" "}
          <span className="mobileICon">
            <MdAddShoppingCart className="basketIcon" />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Product
