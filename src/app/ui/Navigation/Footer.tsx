import React from "react";
import { Box, Theme, Toolbar } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import NavMenu from "./NavbarMenu";
import { useLocation } from "react-router-dom";

interface StyleProps {
  pathname: string;

}

const useStyles = makeStyles<Theme,StyleProps>(()=>({
  root : {
    zIndex:1000,
    background: "#3d2f09",
    position:"fixed",
    bottom:0,
    top:'auto',
    left:0,
    width: "100%",
    height: 50,
    display:"flex",
    justifyContent: 'center',
    alignItems:"center",
  },
  toolbar: {
    width:300,
    padding:0,
    margin:"0 auto"
  },

}))




const Footer = () => {
  const { pathname }  = useLocation()
  const classes = useStyles({pathname})
  return (
    <Box className={classes.root} >
      <Toolbar className={classes.toolbar}>
        <NavMenu/>
      </Toolbar>
    </Box>
  );
};

export default Footer;