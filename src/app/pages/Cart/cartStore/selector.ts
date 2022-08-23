import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/store";
import { ProductItem } from "../../../../shared/models/models";

const getCart =( state:RootState)=> state.cartReducer.products

export const cartSelector = createSelector(
  [getCart],
  (products)=>{
    let selectedProducts:ProductItem[] = []


  return {
     cartProducts: selectedProducts
  }
  }
)
