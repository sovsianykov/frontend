import { ContactMail, HomeOutlined, InfoOutlined, ShoppingCart } from "@material-ui/icons";
import React from "react";

export enum AppRoutes {
  Nome='/',
  About='/about',
  Cart= '/cart',
  Detail ='/product/:id',
  Admin ='/admin'
}

export interface NavItem {
  id:number;
  label:string;
  path: AppRoutes;
  icon?: React.ReactNode;
}

export const navItems:NavItem[] = [
  { id: 1, label:"Home" , path: AppRoutes.Nome, icon: HomeOutlined},
  { id: 2, label:"About" , path: AppRoutes.About, icon: InfoOutlined},
  { id: 3, label:"Cart" , path: AppRoutes.Cart , icon: ShoppingCart},
  { id: 4, label:"Admin" , path: AppRoutes.Admin , icon: ContactMail}
]
