import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import AppState from "../../service/appState.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Header(props) {
  AppState.updateUserDetails()
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = <Button href="/" className={classes.title}>{brand}</Button>;
  let menuItems = []
  let menuItemsResponsive = []
  let userState = AppState.getUserState()
  let sessionToken = AppState.getSessionToken()
  let accountBalance = 0 
  if( AppState.getUserDetails() != null){
    accountBalance = AppState.getUserDetails().balance
  }

  function getLoggedInComponents(){
    return(
      <>
       <div style={{float:"left",marginRight:"15px"}}>
         {accountBalance} MOONKEY coins
        </div>
        <div style={{float:"left",marginRight:"15px"}}>
          <Link to="/profile" style={{fontWeight:"bold"}} > My profile</Link>
        </div>
        <Link to="/logout"  style={{fontWeight:"bold"}}>
          Logout 
        </Link> 
      </>
    )
  }

  function getLoggedInComponentsResponsive(){
    return(
      <>
        <div style={{float:"left",marginRight:"15px",fontWeight:"bold"}}>
         {accountBalance} MOONKEY coins
        </div><br/><br/>
        <div style={{float:"left",marginRight:"15px"}}>
          <Link to="/"  style={{fontWeight:"bold"}} >Homepage</Link>
        </div>
        <br /><br/>
        <div style={{float:"left",marginRight:"15px"}}>
          <Link to="/profile"  style={{fontWeight:"bold"}} >My profile</Link>
        </div>
        <br /><br/>
        <Link to="/logout"  style={{fontWeight:"bold"}}>
          Logout 
        </Link> 
      </>
    )
  }

  if(userState != null && sessionToken != null){
    menuItems.push(getLoggedInComponents())
    menuItemsResponsive.push(getLoggedInComponentsResponsive())
  }

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
          {menuItems}
        </Hidden>
        {userState != null ?  <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>: null}
       
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
            {menuItemsResponsive}
          </div>
          
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
