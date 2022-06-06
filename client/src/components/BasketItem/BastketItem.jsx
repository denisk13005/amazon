import React, { useEffect, useState } from "react"
import "./basketItem.scss" // is the same component of product just the button change
import { useDispatch } from "react-redux"
import { removeProduct, addProduct } from "../../utils/Redux-toolkit/products"
/**
 * item of the basket with the product and the quantity
 * @param {string} description description of the product
 * @param {number} price price of the product
 * @param {number} smallPrice cts price of the product in small format
 * @param {number} stars number of stars of the product
 * @param {string} img url of the product image
 * @param {number} id id of the product
 *  @param {number} qte quantity of the same product
 * @returns {JSX.Element} JSX element of the product in basket
 */
const BastketItem = ({
  description,
  price,
  smallPrice,
  stars,
  img,
  id,
  qte,
}) => {
  const product = { description, price, smallPrice, stars, img, id, qte }

  //useDispatch
  const dispatch = useDispatch()
  //dispatch remove product
  const removeProd = () => {
    dispatch(removeProduct(product))
  }
  const addProd = () => {
    dispatch(addProduct(product))
  }

  //calcul total price
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(total + parseFloat(`${price}.${smallPrice}`))
  }, [])
  console.log(typeof total)
  return (
    <>
      <div className="basket">
        <div className="headerProduct">
          <p className="product__description">{description}</p>
          <p className="product__price">
            €<strong>{price}</strong>.<small>{smallPrice}</small>
          </p>
          <p className="stock">En stock</p>
          <div>
            Qté :{" "}
            <span style={{ cursor: "pointer" }} onClick={removeProd}>
              -
            </span>
            <span className="qte">{qte}</span>
            <span style={{ cursor: "pointer" }} onClick={addProd}>
              +
            </span>
          </div>
        </div>

        <div className="imgAndButton">
          <div className="imgContainer">
            <img src={img} alt="" className="product__image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BastketItem
