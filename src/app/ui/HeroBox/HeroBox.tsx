import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../constants/theme";
import { Box, Typography } from "@mui/material";
import heroImg from '../../../@assets/img/photographers-min.png'

const useStyles = makeStyles(() =>({
  root : {
    width:"100%",
  },
  imageWrapper: {
    width:"100%",
    height: 600,
    paddingTop: theme.spacing(20),
    position: "relative",
    zIndex: 10,
    textAlign:"center",
    textShadow:"0 0 5px #000",
    background: `url(${heroImg}) no-repeat center center/cover`,
    '&::after' : {
      content:'""',
      display:"block",
      width: '100%',
      height: '100%',
      position: "absolute",
      opacity: 0.4,
      top: 0,
      left: 0,
      zIndex: 10,
      background: "linear-gradient(black 20%, transparent 80%)",
    },
  },
   title: {
    position: "relative",
    zIndex: 20,
    color: "#fff",
  }
}))



const HeroBox = () => {
  const classes = useStyles()

  return (
    <Box  className={classes.root}>
        <Box className={classes.imageWrapper}>
          <Typography
            variant='h2'
            ml={40}
           className={classes.title}>
            My Mern Store
          </Typography>
        </Box>
    </Box>
  );
};

export default HeroBox;