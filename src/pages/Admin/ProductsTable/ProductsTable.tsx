import React, { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/useAppDispatch";
import Row from "./Row";
import { useFetchAllProducts } from "@/app/hooks/useFetchAllProducts";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { theme } from "@/app/constants/theme";
import { deleteProduct } from "@/store/thunks";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cell: {
    padding: theme.spacing(0.5, 2),
    background: "#dcdbdb",
    border: "1px solid #ccc",
    color: "#494848",
    fontSize: 16,
    fontWeight: 300,
  },
}));

const ProductsTable = () => {
  useFetchAllProducts();
  const { products, isLoading } = useAppSelector(
    (state) => state.productsReducer
  );
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const onDeleteHandler = useCallback(
    (id) => {
      dispatch(deleteProduct(id));
    },
    [dispatch]
  );

  return (
    <Box>
      <Typography variant="h6" align="center" mb={2}>
        All products
      </Typography>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <table>
          <thead>
            <tr>
              <th className={classes.cell}>Title</th>
              <th className={classes.cell}>Category</th>
              <th className={classes.cell}>Price</th>
              <th className={classes.cell}>Delete</th>
              <th className={classes.cell}>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Row
                product={product}
                key={product._id}
                onDelete={onDeleteHandler}
              />
            ))}
          </tbody>
        </table>
      )}
    </Box>
  );
};

export default memo(ProductsTable);
