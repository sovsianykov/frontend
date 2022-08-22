import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ProductItem } from "../shared/models/models";


const getProducts =( state:RootState) => state.productsReducer
const selectedCategory =( state:RootState) => state.productsReducer.selectedCategory




 export const filteredProducts = createSelector(
  [getProducts,selectedCategory],
  ({ products ,isLoading}, selectedCategory ) =>{
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
