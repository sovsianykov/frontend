import React, { FunctionComponent, memo, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import { StarTwoTone } from "@material-ui/icons";

interface StarProps {
  active: boolean;
  rate: number;
  onClick:(id:number) => void;
  id: number;
}
 type StyleProps = { active: boolean }

const useStyles = makeStyles<Pick<StarProps, 'active'>,StyleProps>(() => ({
  root: {
    width: 18,
    height: 18,
    fontSize: 18,
    cursor:"pointer",
    color:({active}) => active ? "gold" : "#ccc"
  }
}))

const Star:FunctionComponent<StarProps> = ({active,id,onClick}) => {
   const classes = useStyles({active})
   const onClickHandler = useCallback(()=>{
     onClick(id+1)
   },[onClick,id])

  return (
    < >
      <StarTwoTone  className={classes.root} onClick={onClickHandler}/>
    </>
  );
};

export default memo(Star);