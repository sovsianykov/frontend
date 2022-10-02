import React from "react";
import Page from "../../shared/components/Page/Page";
import ProductsGrid from "./containers/ProductsGrid";
import HeroBox from "./HeroBox/HeroBox";



const Home = () => {

  return (
    <Page withoutToolBar >
       <HeroBox/>
       <ProductsGrid/>
    </Page>
  );
};

export default Home;
