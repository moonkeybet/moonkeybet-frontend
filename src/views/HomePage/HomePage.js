import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/homePage.js";

import AppState from "../../service/appState.js";
import bettingAmountArray from "../../service/betAmountsConstant.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function HomePage(props) {

  function getButtonGenerator(){
    let buttons =[]
    for(let counter=0;counter<bettingAmountArray.length;++counter){
      let plural = "S"
      let textString = `${bettingAmountArray[counter]} MOONKEY COIN`
      if(counter >0){
        textString+=plural
      }
      let button = <Button key={counter} style={{marginRight:"15px",width:"180px"}}>{textString} &nbsp;<b>(0)</b></Button>
      buttons.push(button)
    }
    return buttons
  }

  const classes = useStyles();
  const { ...rest } = props;

  AppState.updateUserDetails();
  let userState = AppState.getUserState();


let introText = <><div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <h1 className={classes.title}>Test your skills against other players around the world !</h1>
                    <h4 style={{marginBottom:"-25px"}}>
                      Play games while betting Bitcoin to rise in the Moon Key Bet ranking.
                      Every time you win a match, you get your currency reward in real time!
                    </h4>
                    <br />
                    {userState===null? <>
                    <Link to="/register" style={{marginRight:"90px", float:"left"}}>
                      <Button
                        color="danger"
                        size="lg"
                        rel="noopener noreferrer"
                      >
                        Register 
                      </Button>
                    </Link>
                    <Link to="/login" style={{float:"left"}}>
                      <Button
                        color="danger"
                        size="lg"
                        rel="noopener noreferrer"
                      >
                        Login
                      </Button>
                    </Link>
                    </>:null}
                
                  </GridItem>
                </GridContainer>
                </div></>

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Moonkey bet"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
        {userState == null ?
          <Parallax filter image={require("assets/img/landing-bg.jpg")}>
            {introText}
          </Parallax>
         :   <Parallax style={{height:"150px"}}filter image={require("assets/img/landing-bg.jpg")}>
        
            </Parallax>}
    
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{minHeight:"300px",paddingTop:"30px",paddingBottom:"45px"}} className={classes.container}>
          <h3 style={{color:"grey"}}>Choose your <b>bet amout</b>:</h3> 
          <br/>
          <div>
            {getButtonGenerator()}
          </div>
          <br/>
          <p style={{color:"grey"}}>
            In order to play a match against another player, simply click on any of the above buttons to join a match. 
            The number inside the <i>parenthesis ()</i>  indicates how many players are currently waiting for an opponent 
            for the given <b>bet amount</b>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
