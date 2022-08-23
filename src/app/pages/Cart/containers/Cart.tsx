import React from "react";
import Page from "../../../../shared/components/Page/Page";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import { filteredProducts } from "../../../../store/selectors";
import EmptyCart from "../components/EmptyCart";
import { Grid } from "@material-ui/core";
import CartItem from "../components/CartItem";

const Cart = () => {

  const { products } = useAppSelector(state => state.cartReducer)

  console.log(products);

  return (
    <Page pageTitle='Your Cart' >
      { products.length ?
        <Grid container spacing={1}direction='column-reverse'>
          {products.map(product => <Grid item xs key={product._id} >
            <CartItem product={product} />
          </Grid>)}
        </Grid>
        : <EmptyCart/>}
    </Page>
  );
};

export default Cart;
