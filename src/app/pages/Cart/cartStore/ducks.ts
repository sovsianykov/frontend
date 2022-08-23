import { CartState } from "./models";
import { createSlice, current } from "@reduxjs/toolkit";


const initialState:CartState = {
  products:[],
}

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    addToCart : (state,action) => {

      const prevState = current(state)
      const newProduct = {...action.payload }
      let item = prevState.products.find(p => p.title === action.payload.title)
      if (item ) {
        state.products = [...prevState.products, newProduct]

      } else
        state.products = prevState.products.concat([newProduct])
    } ,
    removeFromCart : (state,action) => {
      state.products.filter(p => p._id !== action.payload)
    },
    addQuantity : (state, action) => {
       const prevState  = { ...current(state) }
      const index = prevState.products.indexOf(action.payload);
      console.log(index)
      const newItem = prevState.products[index]
      state.products[index] = {...newItem,quantity:newItem.quantity + 1}

    }
  }
})

export default cartSlice.reducer;

export const { addToCart,removeFromCart,addQuantity} =  cartSlice.actions
