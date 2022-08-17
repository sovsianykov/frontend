import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../api/httpService";


export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
 async (_,{rejectWithValue})=>{
   try {
     const response = await httpService.getAll('products')
     if (response.status !== 200) {
       console.log("Something vent wrong!!!")
     }
     return response.data

   } catch (e:any) {
     return   rejectWithValue(e.message)
   }
 }
)
