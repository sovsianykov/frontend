import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../ApprRoutes/AppRoutes";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Admin from "../pages/Admin/Admin";
import Welcome from "../pages/Welcome/Welcome";
import AddProductPage from "../pages/Admin/AddProductPage/AddProductPage";

const Routing = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Welcome} element={<Welcome/>} />
      <Route path={AppRoutes.Nome} element={<Home/>} />
      <Route path={AppRoutes.About} element={<About/>} />
      <Route path={AppRoutes.Cart} element={<Cart/>} />
      <Route path={AppRoutes.Admin} element={<Admin/>} />
      <Route path={AppRoutes.AddProductPage} element={<AddProductPage/>} />
    </Routes>
  );
};

export default Routing;
