import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./user"
import productsSlice from "./products"

/**
 * redux store
 * @returns {store} redux store
 */
export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
  },
})
