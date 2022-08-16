import React, { useEffect, useState } from "react";
import httpService from "./api/httpService";
import { ProductItem } from "./shared/models/models";
import Navbar from "./app/ui/Navigation/Navbar";
import Providers from './app/Providers/ProvidersUtil'
import Routing from "./app/Routing/Routing";


function App() {
  const [products,setProducts] = useState<ProductItem[]>([])
  console.log(products);
  useEffect(() =>{
    httpService.getAll('/products').then(r => setProducts(r.data))
  },[])
  return (
    < Providers>
      <Navbar/>
      <Routing/>
    </Providers>
  );
}

export default App;
