import React, { Component } from "react";
import Expo from "expo";
import WelcomeScreen from "./WelcomeScreen/index.js";
import firebase from 'firebase'
import { Text, StyleSheet } from 'react-native';

var firebaseConfig = {
  apiKey: "AIzaSyCQrnN2gZJaFatH-ICtWNxhcZvQbWAHhis",
  authDomain: "single-kingdom-126207.firebaseapp.com",
  databaseURL: "https://single-kingdom-126207.firebaseio.com/",
  storageBucket: "gs://single-kingdom-126207.appspot.com"
};
window.firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor() {

// Initialize Firebsase
    super();
    this.state = {
      isReady: false
    };
  }
  
  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Bungee-inline': require('./assets/fonts/BungeeInline-Regular.ttf'),
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("native-base/Fonts/Ionicons.ttf")
      });
     this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <WelcomeScreen />;
  }
}
