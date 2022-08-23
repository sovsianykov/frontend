import React, { FunctionComponent, memo, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../../constants/theme";
import { Box, IconButton, Typography } from "@material-ui/core";
import { ProductItem } from "../../../../shared/models/models";
import { Add, Remove, RemoveShoppingCart } from "@material-ui/icons";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addQuantity } from "../cartStore/ducks";

interface CartItemProps {
  product: ProductItem;
}

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 104,
    margin: theme.spacing(0, "auto"),
  },
  root: {
    maxWidth: 800,
    height: 100,
    display: "flex",
    padding: theme.spacing(1, 5, 1, 2),
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.palette.background.paper,
  },
  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    overflow: "hidden",
  },
  img: {
    display: "block",
    width: "120%",
    height: "100%",
    background: "#000",
  },
  quantityBlock: {
    width: 40,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonsStack: {
    width: 20,
    height: 55,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  icon: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#8d8a8a",
    color: "#fff",
    "&:hover": {
      background: "#575656",
    },
  },
  title: {
    marginLeft: theme.spacing(2),
    width: 200,
    overflow: "hidden",
    height: 90,
    display: "flex",
    alignItems: "center",
  },
}));

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const classes = useStyles();
  const addQuantityHandler = useCallback(() =>{
    const newItem = { ...product,quantity:product.quantity +1 }
    console.log(newItem);
    dispatch(addQuantity(newItem))
  },[dispatch])

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.root}>
        <Box className={classes.imageWrapper}>
          <img
            src={product.imageUrl}
            alt={product.title}
            className={classes.img}
          />
        </Box>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.title}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.title}
        >
          {product.category}
        </Typography>
        <Box className={classes.quantityBlock}>
          {product.quantity}
          <div className={classes.buttonsStack}>
            <IconButton className={classes.icon} onClick={addQuantityHandler}>
              <Add />
            </IconButton>
            <IconButton className={classes.icon}>
              <Remove />
            </IconButton>
          </div>
        </Box>
      </Box>
      <IconButton style={{ marginLeft: 5 }}>
        <RemoveShoppingCart />
      </IconButton>
    </Box>
  );
};

export default memo(CartItem);
