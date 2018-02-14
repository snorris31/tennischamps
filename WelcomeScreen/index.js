import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Welcome from "./WelcomeScreen.js";
import LogIn from "../LogInScreen/LogIn.js";
import Registration from "../RegistrationScreen/Registration.js";
import Home from "../Home/Home.js";
import Instructions from "../InstructionsScreen/Instructions.js";
import Preferences from "../PreferenceScreen/Preferences.js";
//import Training from "../TrainingMode/TrainingMode.js";

const WelcomeScreenRouter = DrawerNavigator(
  {
    Welcome: { screen: Welcome },
    LogIn: { screen: LogIn },
    Registration: { screen: Registration },
    Home: { screen: Home },
    Instructions: {screen: Instructions}, 
    Preferences: {screen: Preferences}
    //Training: { screen: Training }
  }
);

export default WelcomeScreenRouter;
