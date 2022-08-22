import React from "react";
import { makeStyles } from "@material-ui/styles";
import bg from "../../../@assets/img/welcome_bg.jpg";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../ApprRoutes/AppRoutes";

const useStyles = makeStyles(()=>({
  root: {
    width: 150,
    height: 40,
    position:"absolute",
    top:200,
    right: 200,
    borderRadius: "30px",
    background: "#3d2f09",
    boxShadow:" 0 0 5px #f0d27f",
    border:'none',
    fontWeight: 400,
    fontSize:"20px",
    letterSpacing:"0.09rem",
    color: "#f0d27f",
    cursor: "pointer",
    transition:"0.15s ease-in-out",
    "&:hover" : {
      background: "#f0d27f",
      color: "#3d2f09",
      boxShadow:" 0 0 5px #3d2f09",


    }
  }

}))



const EnterButton = () => {
  const classes = useStyles()
  return (
    <Link to={AppRoutes.Nome}>
      <button type='button' className={classes.root}>
        Enter
      </button>
    </Link>
  );
};

export default EnterButton;
