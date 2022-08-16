import React, { FunctionComponent, memo, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";

interface NavbarItemProps {
  label: string;
  path: string;
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({ label, path }) => {
  const { pathname } = useLocation();
  const active = useMemo(() => pathname === path, [pathname]);
  return (
    <Link to={path}>
      <Typography style={{ color: active ? "gold" : "#FFF" }}>
        {label}
      </Typography>
    </Link>
  );
};

export default memo(NavbarItem);
