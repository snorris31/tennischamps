import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Font } from 'expo';

import Button from '../Components/Button';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerRight: null,  // No hamburger on this screen
    headerLeft: null, // No back button on this screen
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

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.image}
          source={require('../assets/images/tennislogo.png')}
        />

        { this.state.fontLoaded ? (
            <Text style={styles.titleText}>Tennis Champs</Text>
          ) : null }

        <Button style={styles.button}
         label='Log In'
         onPress={() => this.props.navigation.navigate("LogIn")}
        />

       <Button style={styles.button}
        label='Create an Account'
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
    backgroundColor: '#ffffff',
    margin: 18
  },
  image: {
    width: 180,
    height: 180,
    margin: 40,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.8
  },
  titleText: {
    fontFamily: 'bungee-inline',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginBottom: 40,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.8
  }
});
