import React, { Component } from "react";
import { Font } from 'expo';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Content, Left, Right, Text, ListItem, Radio } from 'native-base';

import Button from '../Components/Button';
import Navbar from '../Components/Navbar';

export default class TrainingMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
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
          title='TRAINING'
          onPressBack={() => navigation.goBack(null)}/>

        <Content contentContainerStyle={styles.content}>
        <Text style={styles.text}> Shot: forehand </Text>
          <Image style={styles.court}
            source={require('../assets/images/tenniscourt.png')}
          />
          <Image style={styles.ball}
            source={require('../assets/images/tennisball.png')}
          />
          <Image style={styles.box}
            source={require('../assets/images/box.png')}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#2A5D38',
    height: '100%'
  },
  text: {
    fontFamily: 'bungee-inline',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10
  },
  court: {
    height:525,
    width: 400,
    alignSelf: 'center',
    resizeMode: 'contain',
    zIndex: 0,
  },
  ball: {
    resizeMode: 'contain',
    zIndex: 2,
    height: 18,
    position: 'absolute',
    top: 81,
    right:'-48.5%'
  },
  box: {
    position: 'absolute',
    top: 77,
    right: 171,
    zIndex: 1,
    height: 25,
    width: 25
  }
});
