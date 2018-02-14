import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Welcome from "./Welcome.js";
import LogIn from "../LogInScreen/LogIn.js";
import Registration from "../RegistrationScreen/Registration.js";
import Home from "../Home/Home.js";
import Instructions from "../InstructionsScreen/Instructions.js";
import Mode from "../ModeScreen/Mode.js";
//import Training from "../TrainingMode/TrainingMode.js";

const WelcomeScreenRouter = DrawerNavigator(
  {
    Welcome: { screen: Welcome },
    LogIn: { screen: LogIn },
    Registration: { screen: Registration },
    Home: { screen: Home },
    Instructions: {screen: Instructions},
    Mode: {screen: Mode}
    //Training: { screen: Training }
  }
);

export default WelcomeScreenRouter;
