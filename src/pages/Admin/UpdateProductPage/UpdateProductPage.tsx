import React, { FunctionComponent } from "react";
import Page from "@/shared/components/Page/Page";
import AddProductForm from "@/pages/Admin/addProductForm/AddProductForm";
import { useProduct } from "@/app/hooks/useProduct";




export  const UpdateProductPage:FunctionComponent = () => {
  const { product  } = useProduct()
  return (
    <Page pageTitle='Update Product' centered >
      <AddProductForm initialProduct={product!} update />
    </Page>
  );
};
