import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { Font } from 'expo';

import Button from '../Components/Button';
import SpecialButton from '../Components/SpecialButton'
import Navbar from '../Components/Navbar';

export default class Mode extends React.Component {

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
          title='Mode'
          onPressBack={() => navigation.navigate("Home")}/>

        <Content contentContainerStyle={styles.content}>
          <Text style={styles.headertext}>Choose your mode:</Text>

          <SpecialButton style={styles.button}
           label='Training Mode'
           buttonText = 'Practice your shots and accuracy'/>
          

          <SpecialButton style={styles.button}
          label='Game Mode'
          buttonText = 'Play a Match'/>
          

        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#2A5D38',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  button: {
    backgroundColor: '#ffffff',
    margin: 18,
    marginTop: 50
  },
  text: {
    justifyContent: 'center',
    color: 'white'
  },
  headertext: {
    fontFamily: 'bungee-inline',
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: "flex-start",
    color: "white",
    marginTop: 75
  }
});
