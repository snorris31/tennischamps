import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Welcome from "./WelcomeScreen.js";
import LogIn from "../LogInScreen/LogIn.js";


const WelcomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Welcome },
    LogIn: { screen: LogIn }
  }
);

export default WelcomeScreenRouter;
