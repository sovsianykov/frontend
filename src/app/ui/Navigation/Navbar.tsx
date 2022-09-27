import React, { FunctionComponent, useCallback, useRef } from "react";
import { AppBar, Container, IconButton, Menu, Theme, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarMenu from "./NavbarMenu";
import NavbarItemMobile from "./NavbarItemMobile";
import { AppRoutes, NavItem, navItems } from "../../ApprRoutes/AppRoutes";
import { makeStyles } from "@material-ui/styles";
import { Link, useLocation } from "react-router-dom";

interface StyleProps {
  pathname: string
}

const useStyles = makeStyles<Theme,StyleProps>(() =>({
  root : {
    background: "#3d2f09",
  },
  toolbar: {
    justifyContent: ({pathname})=> pathname === '/'? 'center' : 'flex-start',
  },
  logo : {
    fontSize: "24px",
    fontWeight: 400,
    letterSpacing:"0.2rem",
    fontFamily:"KaushanScript",
    color:"#FFF",
    cursor: "pointer",
    transition:".15s ease-in-out",
     "& span" : {
      color: "red"
     },
    "&:hover" : {
      color:"gold"
    }
  }

}))


const Navbar:FunctionComponent = () => {

  const { pathname }  = useLocation()
  const classes = useStyles({pathname})

  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  const handleMenu = (event: any) => {

    setAnchor(event.currentTarget);
  };

  const ref = useRef(null);
  const onAnchorHandler = useCallback(() => {
    if (ref.current) {
      setAnchor(null);
    }
  }, [ref]);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );
  return (
    <AppBar className={classes.root} >
      <Container>
        <Toolbar className={classes.toolbar}>
          <Link to={AppRoutes.Welcome}>
            <Typography className={classes.logo}>
              <span>M</span>
              ERN <span>s</span>hopping <span>c</span>art
            </Typography>
          </Link>
          {isMobile ? (
            <>
              <IconButton onClick={handleMenu}>
                <MenuIcon style={{ color: "#FFF" }} />
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
                {navItems.map((item:NavItem) => (
                  <NavbarItemMobile
                    ref={ref}
                    key={item.id}
                    label={item.label}
                    path={item.path}
                    icon={item.icon}
                    onClick={onAnchorHandler}
                  />
                ))}
              </Menu>
            </>
          ) : (
            pathname === '/' ? "" :  <NavbarMenu />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;