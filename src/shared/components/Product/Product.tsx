import React, { FunctionComponent, memo } from "react";
import { ProductItem } from "../../models/models";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Card, Typography } from "@material-ui/core";
import { theme } from "../../../app/constants/theme";
import { AddShoppingCart } from "@material-ui/icons";

interface ProductProps {
  product: ProductItem;
}

const useStyles = makeStyles(() => ({
  root: {
    width: 350,
    height: 350,
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "18px",
    letterSpacing: "0.1rem",
    fontWeight: 300,
    color: theme.palette.primary.main,
  },
  imageWrapper: {
    marginTop: theme.spacing(1),
    width: 310,
    height: 200,
    overflow: "hidden",
    opacity: 0.98,
    borderRadius: 5,
    transition: "0.3s ease-in-out",
    "&:hover": {
      width: 312,
      opacity: 1,
    },
  },
  actionBlock: {
    marginTop: theme.spacing(1.5),
    width: "100%",
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Product: FunctionComponent<ProductProps> = ({ product }) => {
  console.log(product);
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={8}>
      <Typography variant="h6" className={classes.title}>
        {product.title}
      </Typography>
      <Box className={classes.imageWrapper}>
        <img src={product.imageUrl} alt={product.title} />
      </Box>
      <Box alignSelf="flex-start" mt={2}>
        price : ${product.price}
      </Box>
      <Box className={classes.actionBlock}>
        <Button variant="contained" color="primary">
          show more
        </Button>
        <Button color="secondary">
          <p style={{ marginRight: 4 }}>add to cart </p>
          <AddShoppingCart />
        </Button>
      </Box>
    </Card>
  );
};

export default memo(Product);
