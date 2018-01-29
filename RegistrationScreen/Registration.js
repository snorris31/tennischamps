import React, { Component } from "react";
import { StyleSheet, Text, TextInput, Switch, View } from 'react-native';
import * as firebase from 'firebase';
import { Font } from 'expo';
import Button from '../Components/Button';

const firebaseConfig = {
  apiKey: "AIzaSyCQrnN2gZJaFatH-ICtWNxhcZvQbWAHhis",
  authDomain: "single-kingdom-126207.firebaseapp.com",
  databaseURL: "https://single-kingdom-126207.firebaseio.com/",
  storageBucket: "gs://single-kingdom-126207.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref();
    this.state = {
      username: '',
      password: '',
      handedness: null,
      fontLoaded: false
    };
  }
  handleClick = () => {
     this.itemsRef.push({
          username: this.state.username,
          password: this.state.password,
          handedness: this.state.handedness
        });
    
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
      { this.state.fontLoaded ? (
        <Text style={styles.titleText}>Registration</Text>
          ) : null }
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
        <Switch
          onValueChange={ (value) => this.setState({handedness: value}) }
          handedness={this.state.handedness} 
        />
        <Button style={styles.button}
         label='Register'
         onPress={(e) => this.handleClick(e)}
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