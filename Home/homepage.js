import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';

import Button from '../Components/Button';

export default class WelcomeScreen extends React.Component {
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

  render() {
    return (
      <View style={styles.container}>


        <Button style={styles.button}
         label='PLAY'
         onPress={() => this.props.navigation.navigate("LogIn")}
        />

       <Button style={styles.button}
        label='HOW TO PLAY'
        onPress={() => this.props.navigation.navigate("Registration")}
        />

        <Button style={styles.button}
        label='SET PREFERENCE'
        onPress={() => this.props.navigation.navigate("Registration")}
        />

        <Button style={styles.button}
        label='MY STATS'
        onPress={() => this.props.navigation.navigate("Registration")}
        />

        <Button style={styles.button}
        label='LOG OUT'
        onPress={() => this.props.navigation.navigate("Registration")}
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A5D38',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: 18,
    width: 250,
    paddingVertical: 10,
    borderRadius: 5
  },
  image: {
    width: 180,
    height: 180,
    margin: 40
  },
  titleText: {
    fontFamily: 'bungee-inline',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40
  }
});