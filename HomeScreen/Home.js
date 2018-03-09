import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { Font } from 'expo';

import Button from '../Components/Button';
import Navbar from '../Components/Navbar';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: null, // No back button on this screen
  };

  constructor(props) {
    super(props);
    const {state} = this.props.navigation;
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
    if (!this.state.fontLoaded) { return null;}

    return (
      <Container>
        <Navbar
          title='HOME'
          onPressBack={() => navigation.goBack(null)}
          handleHamburger={() => navigation.navigate('DrawerOpen')}/>

        <Content contentContainerStyle={styles.content}>
          <Button style={styles.button}
           label='PLAY'
           onPress={() => this.props.navigation.navigate("Mode")}/>

         <Button style={styles.button}
          label='HOW TO PLAY'
          onPress={() => this.props.navigation.navigate("Instructions")}/>

          <Button style={styles.button}
          label='PREFERENCES'
          onPress={() => this.props.navigation.navigate("Preferences", {key: this.state.key, sound: this.state.sound, difficulty: this.state.difficulty, handedness: this.state.handedness})}/>

          <Button style={styles.button}
          label='MY STATS'/>

          <Button style={styles.button}
          label='LOG OUT'
          onPress={() => this.props.navigation.navigate("Welcome")}/>
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
    backgroundColor: '#2A5D38',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#ffffff',
    margin: 18,
  }
});
