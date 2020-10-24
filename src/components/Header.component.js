import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from "./../assets/images/icons8-idea-100.png";
import '../styles/Header.styles.css';

const Header = () => (
  <AppBar
    className="header"
    position="sticky"
    style={{ marginBottom: 5, paddingBottom: 5 }}
  >
    <Toolbar className="box-title">
      <img src={logo} alt="logo" width="35" height="35"></img>
      &nbsp;&nbsp;
      <Typography className="header-title" variant="h4" component="h1">
        Good Ideas App
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.displayName = "Header";

export default Header;
