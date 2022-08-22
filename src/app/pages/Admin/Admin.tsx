import React from "react";
import Page from "../../../shared/components/Page/Page";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../ApprRoutes/AppRoutes";
import { Button } from "@material-ui/core";
import ProductsTable from "./ProductsTable/ProductsTable";

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
