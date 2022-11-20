import React, { FunctionComponent, memo, useCallback, useState } from "react";
import { ProductItem } from "../../models/models";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";
import Star from "./Star";

interface RateProps {
  rate: number;
}

const useStyles = makeStyles(() => ({
  root: {
    width: 50,
    height: 18,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
}));
 const initialRate = [true, true, true, false, false]

const Rate: FunctionComponent<RateProps> = () => {
  const [activeRate, setActiveRate] = useState(initialRate);
  const classes = useStyles();

  const onRateChange = useCallback((id: number) => {
    setActiveRate(activeRate => activeRate.map((el, i) => (i + 1 <= id)));
  }, []);

  return (
    <Box className={classes.root}>
      {activeRate.map((el, i) => <Star
        key={i} id={i} active={el} onClick={onRateChange} rate={5} />)}
    </Box>
  );
};

export default memo(Rate);