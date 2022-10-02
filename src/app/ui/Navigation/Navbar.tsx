import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import { AppBar, Container, IconButton, Menu, Theme, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarMenu from "./NavbarMenu";
import NavbarItemMobile from "./NavbarItemMobile";
import { AppRoutes, NavItem, navItems } from "../../ApprRoutes/AppRoutes";
import { makeStyles } from "@material-ui/styles";
import { Link, useLocation } from "react-router-dom";

interface StyleProps {
  pathname: string;
  color: boolean;
  isMobile: boolean;
}

const useStyles = makeStyles<Theme,StyleProps>(() =>({
  root : {
    zIndex:1000,
    background:
      ({color,pathname}) => !color && (pathname === '/home')
        ? "transparent"
        :  "#3d2f09",
       boxShadow: "none",
    position:"fixed",
    top:0
  },
  toolbar: {
    justifyContent: ({pathname})=> pathname === '/'? 'center' : 'spase-between',
    zIndex:50,
    alignItems:"center",
    padding:0
  },
  logo : {
    fontSize: ({isMobile})=> isMobile? '18px' : '24px',
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
      color:"gold",
      letterSpacing:"0.21rem",
    }
  }

}))


const Navbar:FunctionComponent = () => {

  const { pathname }  = useLocation()
  const [color, setColor] = useState(false)

  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  const onColorChange = useCallback(()=>{
        if (window.scrollY >= 80) {
          setColor(true)
        } else {setColor(false)  }

  },[])

   window.addEventListener('scroll',onColorChange)
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
    theme.breakpoints.down("sm")
  );
  const classes = useStyles({pathname,color,isMobile})
  return (
    <AppBar className={classes.root} >
      <Container>
        <Toolbar className={classes.toolbar}>
          <Link to={AppRoutes.Welcome}>
            <Typography variant='h5' className={classes.logo}>
              <span>M</span>
              ERN <span>s</span>hopping
               <span> c</span>art
            </Typography>
          </Link>
          {isMobile ? (
            <>
              <IconButton onClick={handleMenu}>
                {pathname === "/" ? "" : <MenuIcon style={{ color: "#FFF", alignSelf:"flex-end" }} />}
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