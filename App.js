import React, { Component } from "react";
import Expo from "expo";
import WelcomeScreen from "./WelcomeScreen/index.js";
import firebase from 'firebase'

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
      isReady: true
    };
  }
  // async componentWillMount() {
  //   // await Expo.Font.loadAsync({
  //   //   Roboto: require("native-base/Fonts/Roboto.ttf"),
  //   //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //   //   Ionicons: require("native-base/Fonts/Ionicons.ttf")
  //   // });
  //   this.setState({ isReady: true });
  // }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <WelcomeScreen />;
  }
}
