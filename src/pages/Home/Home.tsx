import React from "react";
import Page from "@/shared/components/Page/Page";
import ProductsGrid from "./containers/ProductsGrid";
import FiltersBar from "./containers/FiltersBar/FiltersBar";
// import { ListOptionsItem } from "@/shared/models/models";

// const listOptions:ListOptionsItem[] = [
//   { id: '0', label: "all" , filterOption:'' },
//   { id: '1', label: "photo" , filterOption:'photo' },
//   { id: '2', label: "watches" , filterOption:'watches' },
//   { id: '3', label: "phones" , filterOption:'phones' },
// ]

const Home = () => {
  return (
    <Page >
       <FiltersBar/>
       <ProductsGrid/>
    </Page>
  );
};

export default Home;
