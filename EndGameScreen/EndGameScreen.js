import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { Font } from 'expo';

import Button from '../Components/Button';


export default class Instructions extends React.Component {

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
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.firsttext}>Training</Text>
          <Text style={styles.firsttext}>Session</Text>
          <Text style={styles.firsttext}>Complete</Text>

          <Text style={styles.text}>NICE WORK, TENNIS CHAMP!</Text>

          <Text style={styles.texta}>TARGETS HIT:</Text>

          <Text style={styles.textb}> 8 out of 10</Text>

          <Text style={styles.textc}> Your ACCURACY:</Text>

          <Text style={styles.textd}> 84%</Text>

          <Button style={styles.button}
           label='Train Again'
           onPress={() => this.props.navigation.navigate("Training")}
          />
          <Button style={styles.button}
           label='End Training'
           onPress={() => this.props.navigation.navigate("Mode")}
          />
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  text: {
    color: '#ffffff',
    fontFamily: 'bungee-inline',
    marginLeft: 20,
    marginTop: 30,
    fontSize: 22
  },
  texta: {
    color: '#ffffff',
    fontFamily: 'bungee-inline',
    marginLeft: 110,
    marginTop: 30,
    fontSize: 22
  },
  textb: {
    color: '#ffffff',
    fontFamily: 'bungee-inline',
    marginLeft: 120,

    fontSize: 22
  },
  textc: {
    color: '#ffffff',
    fontFamily: 'bungee-inline',
    marginLeft: 90,
    marginTop: 30,
    fontSize: 22
  },
  textd: {
    color: '#ffffff',
    fontFamily: 'bungee-inline',
    marginLeft: 130,
    fontSize: 50
  },
  firsttext: {
    color: '#ffffff',
    margin: 3,
    fontFamily: 'bungee-inline',
    marginLeft: 110,
    marginTop: 5,
    fontSize: 28
  },
    button: {
    backgroundColor: '#ffffff',
    marginLeft: 65,
    marginTop: 20,
    fontSize: 28

  }
});
