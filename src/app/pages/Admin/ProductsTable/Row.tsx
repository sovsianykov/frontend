import React, { FunctionComponent, memo } from "react";
import { ProductItem } from "../../../../shared/models/models";
import { IconButton } from "@mui/material";
import { Delete, Remove } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../../constants/theme";

export interface RowProps {
  product: ProductItem;
}

const useStyles = makeStyles(()=>({
  cell: {
    padding: theme.spacing(0.1,2),
    background:"#FFF",
    border: "1px solid #ccc",
    color: "#494848",
    fontSize: 14,
    letterSpacing:"0.05rem"
  }
}))



const Row:FunctionComponent<RowProps> = ({product}) => {

  const classes = useStyles()
  return (
    <tr>
      <td className={classes.cell}>{product.title}</td>
      <td className={classes.cell}>{product.category}</td>
      <td className={classes.cell}>$ {product.price}</td>
      <td className={classes.cell}><IconButton style={{color:"red"}}><Remove/></IconButton></td>
      </tr>
  );
};

export default memo(Row);
