import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ProductItem } from "../shared/models/models";






 export const filteredProducts = createSelector(
   ( state:RootState) => state.productsReducer,
   ( state:RootState) => state.productsReducer.selectedCategory,
  ({ products ,isLoading}, selectedCategory ) =>{
    let selectedProducts:ProductItem[] =[...products]
       if (!isLoading && !!selectedCategory ) {
         selectedProducts = [...products].filter(p => p.category === selectedCategory)
       }
    return {
         isLoading,
      products: selectedProducts,

    }
  }
)

export const cartSelector = createSelector(
  ( state:RootState) => state.productsReducer,
  ({products})=>{
     const cartProducts = products.filter(product => product.quantity > 0 )
     const subTotal = cartProducts.reduce((acc,product) => acc + product.price * product.quantity,0)
    return {
       products : cartProducts,
       subTotal
    }
  }
)
