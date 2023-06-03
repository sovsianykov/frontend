import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import bg from "../../@assets/img/welcome_bg.jpg";
import bgSmall from "../../@assets/img/smallBg.jpg";
import EnterButton from "./EnterButton";
import { theme } from "../../app/constants/theme";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    background: `url(${bg}) center center/cover`,
    position: "relative",
    zIndex: 100,
    top: 0,
    [theme.breakpoints.down("xs")]: {
      background: `url(${bgSmall}) no-repeat center center/contain`,
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <EnterButton title="Enter" />
    </Box>
  );
};

export default Welcome;
