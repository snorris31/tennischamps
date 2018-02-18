import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Welcome from "./Welcome.js";
import LogIn from "../LogInScreen/LogIn.js";
import Registration from "../RegistrationScreen/Registration.js";
import Home from "../HomeScreen/Home.js";
import Instructions from "../InstructionsScreen/Instructions.js";
import Preferences from "../PreferenceScreen/Preferences.js";
import Mode from "../ModeScreen/Mode.js";
import Training from "../TrainingMode/TrainingMode.js";
import Game from "../GameMode/GameMode.js";

const RootStack = StackNavigator(
  {
    Welcome: { screen: Welcome },
    LogIn: { screen: LogIn },
    Registration: { screen: Registration },
    Home: { screen: Home },
    Instructions: { screen: Instructions },
    Preferences: { screen: Preferences },
    Mode: { screen: Mode },
    Training: { screen: Training },
    Game: { screen: Game }
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default RootStack;
