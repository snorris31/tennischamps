import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Welcome from "./WelcomeScreen/Welcome.js";
import LogIn from "./LogInScreen/LogIn.js";
import Registration from "./RegistrationScreen/Registration.js"
import Home from "./HomeScreen/Home.js"
import Instructions from "./InstructionsScreen/Instructions.js"

const WelcomeScreenRouter = DrawerNavigator(
  {
    //need better consistency
    Welcome: { screen: Welcome },
    LogIn: { screen: LogIn },
    Registration: {screen: Registration},
    Home: { screen: Home},
    Instructions: { screen: Instructions}
  }
);

export default WelcomeScreenRouter;
