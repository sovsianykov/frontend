import React, { useCallback, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Menu,
  IconButton,
  Theme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarMenu from "./NavbarMenu";
import NavbarItemMobile from "./NavbarItemMobile";
import { navItems } from "../../ApprRoutes/AppRoutes";

const Navbar = () => {
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  const handleMenu = (event:any ) => {
    setAnchor(event.currentTarget);
  };

  const ref = useRef(null)
  const onAnchorHandler = useCallback(() => {
    console.log(ref);
    if (ref.current) {
      setAnchor(null);
    }
  },[ref]);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );
  return (
    <AppBar>
      <Toolbar>
        <Typography >MERN shopping cart</Typography>
        {isMobile ? (
          <>
            <IconButton onClick={ handleMenu}>
              <MenuIcon  style={{ color:"#FFF"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchor}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
            >
              {navItems.map(item =>   <NavbarItemMobile
                ref ={ref}
                key={item.id}
                label={item.label}
                path={item.path}
                icon={item.icon}
                onClick={onAnchorHandler}
              />)}
            </Menu>
          </>
        ) : (
          <NavbarMenu />
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
