import React from "react";
import AddProductForm from "@/pages/Admin/addProductForm/AddProductForm";
import Page from "@/shared/components/Page/Page";
import { initialProduct } from "@/pages/Admin/constants/constants";

const AddProductPage = () => {
  return (
    <Page pageTitle='Add Product' centered >
      <AddProductForm initialProduct={initialProduct}/>
    </Page>
  );
};

export default AddProductPage;
