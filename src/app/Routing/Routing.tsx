import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProductPage from "@/pages/Admin/AddProductPage/AddProductPage";
import Welcome from "@/pages/Welcome/Welcome";
import Admin from "@/pages/Admin/Admin";
import Detail from "@/pages/Detail/Detail";
import Cart from "@/pages/Cart/containers/Cart";
import About from "@/pages/About/About";
import { AppRoutes } from "@/app/ApprRoutes/AppRoutes";
import Home from "@/pages/Home/Home";
import { UpdateProductPage } from "@/pages/Admin/UpdateProductPage/UpdateProductPage";

const Routing = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Welcome} element={<Welcome/>} />
      <Route path={AppRoutes.Nome} element={<Home/>} />
      <Route path={AppRoutes.About} element={<About/>} />
      <Route path={AppRoutes.Cart} element={<Cart/>} />
      <Route path={AppRoutes.Admin} element={<Admin/>} />
      <Route path={AppRoutes.Detail} element={<Detail/>} />
      <Route path={AppRoutes.AddProductPage} element={<AddProductPage/>} />
      <Route path={AppRoutes.UpdateProductPage} element={<UpdateProductPage/>} />
    </Routes>
  );
};

export default Routing;
