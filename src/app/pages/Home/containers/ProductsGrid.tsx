import React, { memo } from "react";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import { Grid, LinearProgress } from "@material-ui/core";
import Product from "../../../../shared/components/Product/Product";
import { filteredProducts } from "../../../../store/selectors";

const ProductsGrid = () => {

  const { products ,isLoading } = useAppSelector(filteredProducts)

  return (
    <Grid container style={{ maxWidth: 1400, margin:"0 auto"}} spacing={1}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <Product product={product} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default memo(ProductsGrid);
