import React from "react";
import Page from "../../../shared/components/Page/Page";
import { useFetchAllProducts } from "../../hooks/useFetchAllProducts";
import { useAppSelector } from "../../hooks/useAppDispatch";

const Home = () => {
  useFetchAllProducts()
  console.log(useAppSelector(state => state.productsReducer.products));
  return (
    <Page pageTitle={'Home'}>
      
    </Page>
  );
};

export default Home;
