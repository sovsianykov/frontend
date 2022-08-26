import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ProductsTable from "./ProductsTable/ProductsTable";
import { AppRoutes } from "@/app/ApprRoutes/AppRoutes";
import Page from "@/shared/components/Page/Page";

const Admin = () => {
  return (
    <Page pageTitle={"Admin"} >
      <Link to={AppRoutes.AddProductPage}>
        <Button>Add Product</Button>
      </Link>
      <ProductsTable/>
    </Page>
  );
};

export default Admin;
