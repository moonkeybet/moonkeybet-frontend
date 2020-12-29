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

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Test your skills against other players around the world !</h1>
              <h4>
                Play games while betting Bitcoin to rise in the Moon Key Bet ranking.
                Every time you win a match, you get your currency reward in real time!
              </h4>
              <br />
              <Link to="/register" style={{marginRight:"250px"}}>
                <Button
                  color="danger"
                  size="lg"
                  rel="noopener noreferrer"
                >
                  Register 
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  color="danger"
                  size="lg"
                  rel="noopener noreferrer"
                >
                  Login
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{height:"300px"}} className={classes.container}>
          <p style={{color:"grey"}}>* available game rooms to be inserted here *</p>
          {/*<ProductSection />
          <TeamSection />
          <WorkSection />*/}
        </div>
      </div>
      <Footer />
    </div>
  );
}
