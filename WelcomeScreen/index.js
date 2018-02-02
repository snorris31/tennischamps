import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Welcome from "./WelcomeScreen.js";
import LogIn from "../LogInScreen/LogIn.js";
import Registration from "../RegistrationScreen/Registration.js"
import homepage from "../Home/homepage.js"

const WelcomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Welcome },
    LogIn: { screen: LogIn },
    Registration: {screen: Registration},
    homepage: { screen: homepage}
  }
);

export default WelcomeScreenRouter;
