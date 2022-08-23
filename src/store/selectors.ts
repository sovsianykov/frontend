import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ProductItem } from "../shared/models/models";


const getProducts =( state:RootState) => state.productsReducer
const selectedCategory =( state:RootState) => state.productsReducer.selectedCategory
const cartProducts = (state:RootState) => state.cartReducer.products



 export const filteredProducts = createSelector(
  [getProducts,selectedCategory,cartProducts],
  ({ products ,isLoading}, selectedCategory ,cartProducts) =>{

    let selectedProducts:ProductItem[] =[...products]
       if (!isLoading && !!selectedCategory ) {
         selectedProducts = [...products].filter(p => p.category === selectedCategory)
       }
    return {
         isLoading,
      products: selectedProducts
    }
  }
)
