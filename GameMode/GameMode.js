import React, { Component } from "react";
import { Font } from 'expo';
import { Alert, StyleSheet, View, Image } from 'react-native';
import { Container, Content, Left, Right, Text, ListItem, Radio } from 'native-base';

import Button from '../Components/Button';
import Navbar from '../Components/Navbar';
import Hidden from '../Components/Hidden';

export default class GameMode extends Component {
  static navigationOptions = {
    drawerLabel: <Hidden />,
  };

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  _onPressButton() {
    Alert.alert('You win!')
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

    var targetLocations = [];

    return (
      <Container style={styles.container}>
        <Navbar
          title='GAME'
          onPressBack={() => navigation.goBack(null)}/>

        <View contentContainerStyle={styles.content}>
        <Text style={styles.text}>SCORE: 0-0</Text>
          <Image style={styles.court}
            source={require('../assets/images/tenniscourt.png')}
          />
          <Image style={styles.ball}
            source={require('../assets/images/tennisball.png')}
          />
          <Image style={styles.person}
            source={require('../assets/images/person.png')}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A5D38',
  },
  content: {
    height: '100%',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    zIndex: 3,
    left: 60,
    bottom: 20
  },
  text: {
    fontFamily: 'bungee-inline',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  },
  court: {
    height: 525,
    width: 400,
    alignSelf: 'center',
    resizeMode: 'contain',
    zIndex: 0,
  },
  ball: {
    resizeMode: 'contain',
    zIndex: 2,
    position: 'absolute',
    alignSelf: 'center',
    height: 16,
    top: 70,
    right: -158
  },
  person: {
    resizeMode: 'contain',
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'center',
    height: 50,
    top: 52,
    right: -50
  }
});
