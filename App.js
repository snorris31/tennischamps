import React, { Component } from "react";
import Expo from "expo";
import WelcomeScreen from "./WelcomeScreen/index.js";

export default class App extends Component {
  constructor() {
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
