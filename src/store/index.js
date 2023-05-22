import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import { addToCart, removeFromCart } from "./cartSlice"

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export {store, addToCart, removeFromCart}