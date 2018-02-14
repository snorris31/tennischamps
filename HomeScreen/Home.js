import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { Font } from 'expo';

import Button from '../Components/Button';
import Navbar from '../Components/Navbar';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      key: state.params.key,
      sound: state.params.sound, 
      difficulty: state.params.difficulty,
      handedness: state.params.handedness
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
          onPressBack={() => navigation.goBack(null)}/>

        <Content contentContainerStyle={styles.content}>
          <Button style={styles.button}
           label='PLAY'
           onPress={() => this.props.navigation.navigate("LogIn")}/>

         <Button style={styles.button}
          label='HOW TO PLAY'
          onPress={() => this.props.navigation.navigate("Instructions")}/>

          <Button style={styles.button}
          label='SET PREFERENCE'
          onPress={() => this.props.navigation.navigate("Preferences", {key: this.state.key, sound: this.state.sound, difficulty: this.state.difficulty, handedness: this.state.handedness})}/>

          <Button style={styles.button}
          label='MY STATS'
          onPress={() => this.props.navigation.navigate("Registration")}/>

          <Button style={styles.button}
          label='LOG OUT'
          onPress={() => this.props.navigation.navigate("Welcome")}/>
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
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#ffffff',
    margin: 18,
  }
});
