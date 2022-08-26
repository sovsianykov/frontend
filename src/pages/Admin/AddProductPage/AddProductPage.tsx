import React from "react";
import AddProductForm from "@/pages/Admin/addProductForm/AddProductForm";
import Page from "@/shared/components/Page/Page";

const AddProductPage = () => {
  return (
    <Page pageTitle='Add Product' centered >
      <AddProductForm/>
    </Page>
  );
};

export default AddProductPage;
