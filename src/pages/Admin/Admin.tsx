import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ProductsTable from "./ProductsTable/ProductsTable";
import { AppRoutes } from "@/app/ApprRoutes/AppRoutes";
import Page from "@/shared/components/Page/Page";
import Modal from "@/shared/components/Modal/Modal";
import {useModal} from "@/shared/components/Modal/useModal";


const Admin = () => {
  const {open , toggle } = useModal()
  return (
    <Page pageTitle={"Admin"} centered >
      <Modal open={open} hide={toggle}/>
      <Link to={AppRoutes.AddProductPage}>
        <Button variant='contained' style={{ margin: '10px 0'}} color='primary'>Add New Product</Button>
      </Link>
      <ProductsTable/>
    </Page>
  );
};

export default Admin;
