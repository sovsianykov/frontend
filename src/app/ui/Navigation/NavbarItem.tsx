import React, { FunctionComponent, memo,useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useAppSelector } from "../../hooks/useAppDispatch";
import { cartSelector } from "../../../store/selectors";
import { theme } from "../../constants/theme";
import { Theme } from "@mui/material";

interface NavbarItemProps {
  label: string;
  path: string;
}
interface StyleProps {
  active: boolean;
  hovered: boolean;
}
const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: {
    display: "flex",
    position: "relative",
  },
  title: {
    color: ({ active }) => (active ? "gold" : "#FFF"),
    letterSpacing: "0.1rem",
    fontFamily:"KaushanScript",
    fontWeight: 400,
    fontSize:18,
    transition: ".15s ease-in-out",
    "&:hover": {
      color: "gold",
    },
    "&:first-letter": {
      color:"red"
    },
  },
  borderAbove: {
    marginTop:theme.spacing(0.5),
    width: ({active,hovered}) => active || hovered ? "100%" : 0,
    height: 3,
    background:"gold",
    transition:".7s ease-in-out"
  },
  cartIcon: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "red",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    position:"relative",
    top:0,
  },
   quantity: {
     lineHeight: 5,
     fontSize: 10,
     display:"block",
     letterSpacing: 0,
     width:12,
     textAlign: "center"
   }
}));

const NavbarItem: FunctionComponent<NavbarItemProps> = ({ label, path }) => {
  const { pathname } = useLocation();
  const [ hovered, setHovered ] = useState(false)
  const active = useMemo(() => pathname === path, [pathname]);
  const classes = useStyles({ active,hovered });
  const { products } = useAppSelector(cartSelector);
  const totalInCart = useMemo(() => products.length, [products]);


  return (
    <Box className={classes.root}>
      <Link to={path}
            onMouseEnter={() =>setHovered(true)}
            onMouseLeave={() =>setHovered(false)}>
        <Typography className={classes.title}>{label}</Typography>
        <Box className={classes.borderAbove}/>
      </Link>
      {(label === "Cart") && totalInCart ? (
        <Box className={classes.cartIcon}>
          <div className={classes.quantity}>
            {totalInCart}
          </div>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default memo(NavbarItem);
