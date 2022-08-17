import React, { FunctionComponent, memo, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface NavbarItemProps {
  label: string;
  path: string;
}
interface StyleProps {
  active: boolean;
}
const useStyles = makeStyles<Pick<StyleProps, 'active'>,StyleProps>(()=>({
  title : {
    color: ({ active }) => active ? "gold" : "#FFF",
    letterSpacing:"0.07rem",
    fontWeight:400,
    transition:".15s ease-in-out",
    "&:hover" : {
      color:"gold"
    }
  }
}))


const NavbarItem: FunctionComponent<NavbarItemProps> = ({ label, path }) => {
  const { pathname } = useLocation();
  const active = useMemo(() => pathname === path, [pathname]);
  const classes = useStyles({active})
  return (
    <Link to={path}>
      <Typography className={classes.title} >
        {label}
      </Typography>
    </Link>
  );
};

export default memo(NavbarItem);
