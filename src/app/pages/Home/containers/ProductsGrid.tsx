import React, { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { Grid, LinearProgress } from "@material-ui/core";
import Product from "../../../../shared/components/Product/Product";
import { filteredProducts } from "../../../../store/selectors";
import { addToCart } from "../../Cart/cartStore/ducks";

const ProductsGrid = () => {
  const dispatch = useAppDispatch()
  const { products ,isLoading } = useAppSelector(filteredProducts)

  const onAddToCartHandler = useCallback((product)=>{
    const addedProduct = {...product }
    console.log(addedProduct);
    dispatch(addToCart(addedProduct))
  },[dispatch])

  return (
    <Grid container style={{ maxWidth: 1400, margin:"0 auto"}} spacing={1}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id} >
            <Product product={product} onAddToCart={onAddToCartHandler}  added={product.added!}/>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default memo(ProductsGrid);
