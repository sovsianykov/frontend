import React, { FunctionComponent, memo, useCallback } from "react";
import { ProductItem } from "@/shared/models/models";
import { IconButton } from "@mui/material";
import { Remove } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { theme } from "@/app/constants/theme";

export interface RowProps {
  product: ProductItem;
  onDelete: (id: string) => void;
}

const useStyles = makeStyles(() => ({
  cell: {
    padding: theme.spacing(0.1, 2),
    background: "#FFF",
    border: "1px solid #ccc",
    color: "#494848",
    fontSize: 14,
    letterSpacing: "0.05rem",
  },
}));

const Row: FunctionComponent<RowProps> = ({ product, onDelete }) => {
  const onClickHandler = useCallback(() => {
    onDelete(product._id);
  }, [onDelete, product._id]);

  const classes = useStyles();
  return (
    <tr>
      <td className={classes.cell}>{product.title}</td>
      <td className={classes.cell}>{product.category}</td>
      <td className={classes.cell}>$ {product.price}</td>
      <td className={classes.cell}>
        <IconButton style={{ color: "red" }} onClick={onClickHandler}>
          <Remove />
        </IconButton>
      </td>
    </tr>
  );
};

export default memo(Row);
