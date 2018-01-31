import React, { Component } from "react";
import * as firebase from 'firebase';
import { Font } from 'expo';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Button from '../Components/Button';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref();
    this.state = {
      username: '',
      password: ''
    };
  }
  handleClick = () => {
      var user = this.state.username;
      var pass = this.state.password;
      var nav = this.props.navigation;
      this.itemsRef.orderByChild("username").equalTo(user).once("value").then(snapshot => {
      // key will be "ada" the first time and "alan" the second time
          if(snapshot.val()){
            this.itemsRef.orderByChild("password").equalTo(pass).once("value").then(snapshot => {
              if (snapshot.val()){
                nav.navigate("WelcomeScreen");
              }
              else {
                nav.navigate("Registration");
              }
           });
          } else {
              nav.navigate("Registration");
          }
        });
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.inputField}
          placeholder='Username'
          onChangeText={(username) => this.setState({username})}
        />

        <TextInput style={styles.inputField}
          placeholder='Password'
          onChangeText={(password) => this.setState({password})}
        />

        <TouchableOpacity style={styles.textLink}
           onPress={() => this.props.navigation.navigate("Home")}
         >
         <Text style={styles.text}> Forgot your password? </Text>
        </TouchableOpacity>

        <Button style={styles.button}
         label='Log In'
         onPress={(e) => this.handleClick(e)}
        />

        <TouchableOpacity style={styles.textLink}
           onPress={() => this.props.navigation.navigate("Registration")}
         >
         <Text style={styles.text}> Don&#8217;t have an account? </Text>
        </TouchableOpacity>

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
    marginTop: 18,
    width: 250,
    paddingVertical: 10,
    borderRadius: 5
  },
  inputField: {
    height: 40,
    width: 250,
    marginTop: 6,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    color: '#000000',
    paddingHorizontal: 6
  },
  titleText: {
    fontFamily: 'bungee-inline',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 50
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  textLink: {
    width: 250,
    margin: 6
  }
});
