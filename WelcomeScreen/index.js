import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import { Text, View, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

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
    navigationOptions: {
      gesturesEnabled: false,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#2A5D38',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'bungee-inline',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
      },
      /*headerRight: (
      <View padding={16}>
        <Button transparent >
          <Ionicons name='md-menu' size={32} color='#ffffff'/>
        </Button>
      </View>),*/
    },
  }
);
/*
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    debugger;
    await Font.loadAsync({
      'bungee-inline': require('../assets/fonts/BungeeInline-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) { <Text>loading</Text>}

    return (
    <View style={{flex: 1}}>
      <RootStack />
    </View>);
  }
}
*/
export default RootStack;
