import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import AppState from "../../service/appState.js";

import { QRCode } from "react-qr-svg";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  let userDetails = AppState.getUserDetails();
  let publicAddress = ""
  if(AppState.getPublicKey() != null && AppState.getPublicKey().length>0){
    publicAddress = AppState.getPublicKey() 
  }
  return (
    <div>
      <Header
        color="transparent"
        brand="MOONKEY BET"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <QRCode
                      bgColor="#FFFFFF"
                      fgColor="#000000"
                      level="Q"
                      style={{ width: 256, borderRadius:0, marginTop:"-125px",marginBottom:"100px" }}
                      value={publicAddress}/>
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Username: {userDetails.username}</h3>
                    <h4>MOONKEY COIN BALANCE: {userDetails.balance} </h4>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                In order to update your MOONKEY COIN balance and play games,<br/>
                you must deposit a minimum of 0.0001 Bitcoin into
                your <i>public addess</i>.<br/>
                You may as well use the QR code above for the deposit.<br/><br/>
                Your <i>public address</i> is: <b>{publicAddress}</b>
              </p>
            </div>
            </div>
        </div>
        <div style={{height:"80px"}}>

        </div>
      </div>
      <Footer />
    </div>
  );
}
