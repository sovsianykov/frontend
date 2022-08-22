import React from "react";
import Page from "../../../../shared/components/Page/Page";
import AddProductForm from "../addProductForm/AddProductForm";

const AddProductPage = () => {
  return (
    <Page pageTitle='Add Product' centered >
      <AddProductForm/>
    </Page>
  );
};

export default AddProductPage;
