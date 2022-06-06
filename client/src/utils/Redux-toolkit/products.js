import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    basketItems: 0,
    loading: false,
    totalPrice: 0,
  },
  reducers: {
    /**
     * this fontion is used to add products to the basket, calculate the total price and the number of items in the basket
     * @param {object} state
     * @param {Function} action
     */
    addProduct: (state, action) => {
      const productPresent = state.products.find(
        (el) => el.id === action.payload.id
      )
      if (productPresent) {
        // if the product is already in the basket, we just add the quantity
        state.products.forEach((product) => {
          if (product.id === action.payload.id) {
            product.qte++
            console.log(product.qte)
          }
        })
        // we return the rest of
        const filteredProducts = state.products.filter(
          (el) => el.id !== action.payload.id
        )
        // we add the product to the basket
        state.products = [...filteredProducts, productPresent]
      }
      // if the product is not in the basket, we add it
      else {
        let product = action.payload
        product.qte = 1
        state.products = [...state.products, product]
      }
      //on incrémente le nb d'items dans le panier
      state.basketItems++
      //on met à jour le total
      const price = `${action.payload.price}.${action.payload.smallPrice}`
      state.totalPrice = state.totalPrice + parseFloat(price)
    },
    removeProduct: (state, action) => {
      // on vérifie que le produit est présent
      const productPresent = state.products.find(
        (el) => el.id === action.payload.id
      )

      if (productPresent) {
        state.products.forEach((product) => {
          if (product.id === action.payload.id) {
            //si la quantité est supérieur à 1, on la décrémente
            product.qte--
            if (product.qte === 0) {
              //si la quantité est égale à 0, on supprime le produit
              state.products = state.products.filter(
                (el) => el.id !== action.payload.id
              )
            }
          }
        })
      }
      //on décrémente le nb d'items dans le panier
      state.basketItems--
      const price = `${action.payload.price}.${action.payload.smallPrice}`
      console.log(price)
      state.totalPrice = state.totalPrice - parseFloat(price)
    },
    reset: (state) => {
      state.products = []
      state.basketItems = 0
      state.totalPrice = 0
    },
  },
})

export const { addProduct, removeProduct, reset } = productsSlice.actions
export default productsSlice.reducer
