import React, { useCallback } from "react";
import { Box } from "@material-ui/core";
import { useAppDispatch } from "../../../../app/hooks/useAppDispatch";
import { category } from "../../../../store/ducks";
import { AppBar,Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../../../app/constants/theme";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: 340,
    justifyContent: "space-between",
    height: 60
  },
  category: {
    padding: theme.spacing(2),
    fontWeight: 800,
    letterSpacing: "0.1rem",
    fontSize: 20,
    cursor: "pointer"
  }

}));


const FiltersBar = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const onCategoryChange = useCallback((categoryName: string) => {
    dispatch(category(categoryName));
  }, [dispatch]);


  return (
    <AppBar style={{ position: "sticky", background: "transparent", marginBottom: 10, zIndex: 0 }} >
      <Box className={classes.root}>
        <Typography
          marginLeft={2}
          variant="subtitle1"
          className={classes.category}
          onMouseEnter={() => onCategoryChange("")}>
          All
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.category}
          onMouseEnter={() => onCategoryChange("photo")}>
          Cameras
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.category}
          onMouseEnter={() => onCategoryChange("watches")}>
          Watches
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.category}
          onMouseEnter={() => onCategoryChange("phones")}>
          Phones
        </Typography>
      </Box>
    </AppBar>
  );
};

export default FiltersBar;
