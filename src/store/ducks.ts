import { ProductsState } from "./models";
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./thunks";


const initialState:ProductsState = {
  products:[],
  isLoading: false,
  error:"",
  selectedCategory: "",
}

const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers: { category: (state,action) => {
    state.selectedCategory= action.payload
    } },
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.pending,(state)=>{
      state.products = [];
      state.isLoading = true;
    })
    builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
      state.products = action.payload;
      state.isLoading = false;
      state.error = '';
    })
    builder.addCase(fetchAllProducts.rejected,(state,action)=>{
      state.products = [];
      state.isLoading = false;
      state.error = action.payload;
    })
  }
})

export default productsSlice.reducer;
export const { category } = productsSlice.actions

