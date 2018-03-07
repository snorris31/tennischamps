import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { Font } from 'expo';

import Button from '../Components/Button';
import SpecialButton from '../Components/SpecialButton'

export default class Mode extends React.Component {
  static navigationOptions = {
    title: 'Mode',
  };

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
      <Container style={styles.container}>
      <Text style={styles.headertext}>Choose your mode:</Text>
        <Content contentContainerStyle={styles.content}>

          <SpecialButton style={styles.button}
           label='Training Mode'
           buttonText = 'Practice Your Shots and Accuracy'
           onPress={() => this.props.navigation.navigate("Training")}/>

          <SpecialButton style={styles.button}
          label='Game Mode'
          buttonText = 'Play a Match'
          onPress={() => this.props.navigation.navigate("Game")}/>


        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A5D38'
  },
  content: {
    flex: 1,
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
    fontSize: 24,
    color: "white",
    marginTop: 60,
    textAlign: 'center'
  }
});
