import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Button from '../Components/Button';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.inputField}
          placeholder='Create Username'
          onChangeText={(username) => this.setState({username})}
        />

        <TextInput style={styles.inputField}
          placeholder='Password'
          onChangeText={(password) => this.setState({password})}
        />
        <TextInput style={styles.inputField}
          placeholder='Re-Type Password'
          onChangeText={(password) => this.setState({password})}
        />
        <TextInput style={styles.inputField}
          placeholder='Lefty or Righty'
          onChangeText={(password) => this.setState({password})}
        />
        <Button style={styles.button}
         label='Register'
         onPress={() => this.props.navigation.navigate("WelcomeScreen")}
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
  inputField: {
    height: 40,
    width: 250,
    margin: 6,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    color: '#000000'
  },
  titleText: {
    fontFamily: 'bungee-inline',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 50
  }
});