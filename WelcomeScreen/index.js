import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Welcome from "./WelcomeScreen.js";
import LogIn from "../LogInScreen/LogIn.js";
import Registration from "../RegistrationScreen/Registration.js"
<<<<<<< HEAD
import homepage from "../Home/homepage.js"
=======

>>>>>>> 12526d356009fde272079fa1c7aa30ca32dd595a

const WelcomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Welcome },
    LogIn: { screen: LogIn },
<<<<<<< HEAD
    Registration: {screen: Registration},
    homepage: { screen: homepage}
=======
    Registration: {screen: Registration}
>>>>>>> 12526d356009fde272079fa1c7aa30ca32dd595a
  }
);

export default WelcomeScreenRouter;
