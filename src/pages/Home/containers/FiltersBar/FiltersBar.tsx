import React, { useCallback } from "react";
import { Box } from "@material-ui/core";
import { useAppDispatch } from "../../../../app/hooks/useAppDispatch";
import { category } from "../../../../store/ducks";
import { Divider, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../../../app/constants/theme";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: 340,
    marginLeft: 60,
    justifyContent:"space-between",
    height:60,
  },
  category: {
    padding: theme.spacing(2),
    fontWeight: 800,
    letterSpacing:"0.1rem",
    fontSize:"24px important!",
    cursor: "pointer"
  }

}));



const FiltersBar = () => {
  const classes = useStyles()
 const dispatch = useAppDispatch()
 const onCategoryChange = useCallback((categoryName:string) =>{
   dispatch(category(categoryName))
 },[dispatch])


  return (
    <Box className={classes.root}>
      <Typography
        variant='h5'
        className={classes.category}
        onMouseEnter={()=> onCategoryChange("")}>
        All
      </Typography>
      <Typography
        variant='h5'
        className={classes.category}
        onMouseEnter={()=> onCategoryChange("photo")}>
        Cameras
      </Typography>
      <Typography
        variant='h5'
        className={classes.category}
        onMouseEnter={()=> onCategoryChange("watches")}>
        Watches
      </Typography>
      <Typography
        variant='h5'
        className={classes.category}
        onMouseEnter={()=> onCategoryChange("phones")}>
        Phones
      </Typography>
      <Divider color='#3d2f09'/>
    </Box>
  );
};

export default FiltersBar;
