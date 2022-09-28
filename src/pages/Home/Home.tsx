import React from "react";
import Page from "../../shared/components/Page/Page";
import ProductsGrid from "./containers/ProductsGrid";
import FiltersBar from "./containers/FiltersBar/FiltersBar";
import HeroBox from "../../app/ui/HeroBox/HeroBox";



const Home = () => {
  return (
    <Page withoutToolBar >
      <HeroBox/>
       <FiltersBar/>
      <ProductsGrid/>
    </Page>
  );
};

export default Home;
