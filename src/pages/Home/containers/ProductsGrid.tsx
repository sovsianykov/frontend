import React, { memo, useCallback } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { filteredProducts } from "../../../store/selectors";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/useAppDispatch";
import { add } from "../../../store/ducks";
import Product from "../../../shared/components/Product/Product";
import { makeStyles } from "@material-ui/styles";
import FiltersBar from "./FiltersBar/FiltersBar";

const useStyles = makeStyles(() =>({
   root: {
     maxWidth: 1400,
     margin:"0 auto",
   }
}))


const ProductsGrid = () => {
  const dispatch = useAppDispatch()
  const { products ,isLoading } = useAppSelector(filteredProducts)
  const classes = useStyles()
  const onAddToCartHandler = useCallback((product)=>{
    dispatch(add(product))
  },[dispatch])

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <FiltersBar/>
      </Grid>
      {isLoading  ? (
        <LinearProgress />
      ) : (
        products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id} >
            <Product product={product} onAddToCart={onAddToCartHandler}  added={product.quantity >0 }/>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default memo(ProductsGrid);
