import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { Font } from 'expo';

import Button from '../Components/Button';
import Navbar from '../Components/Navbar';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'bungee-inline': require('../assets/fonts/BungeeInline-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'bungee-inline': require('../assets/fonts/BungeeInline-Regular.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { navigation } = this.props;
    if (!this.state.fontLoaded) { return null;}

    return (
      <Container>
        <Navbar
          title='HOME'
          onPressBack={() => navigation.goBack("Home")}/>

        <Content contentContainerStyle={styles.content}>
          <Text style={styles.firsttext}>1. Select play mode</Text>

          <Text style={styles.text}>2. Tap 'Ready' to begin</Text>

          <Text style={styles.text}>3. Swipe to hit the ball</Text>

          <Text style={styles.text}>4. To pause/quit, tap the menu in the top right corner</Text>

        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#2A5D38',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  text: {
    color: '#ffffff',
    margin: 20,
    fontFamily: 'bungee-inline',
    marginLeft: 40,
  },
  firsttext: {
    color: '#ffffff',
    margin: 20,
    fontFamily: 'bungee-inline',
    marginLeft: 40,
    marginTop: 100
  }
});
