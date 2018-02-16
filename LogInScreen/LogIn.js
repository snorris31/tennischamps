import React, { Component } from "react";
import * as firebase from 'firebase';
import { Font } from 'expo';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Container, Content, Left, Right, Text, ListItem, Radio } from 'native-base';

import Button from '../Components/Button';
import Navbar from '../Components/Navbar';

export default class LogIn extends Component {

  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref('users');
    this.state = {
      username: '',
      password: '',
      fontLoaded: false
    };
  }

  handleClick = () => {
    const { username, password } = this.state;
    const { navigation } = this.props;

    if (username == '' || password == '') {
      alert("Please enter username and password.");
    } else {
      this.itemsRef.orderByChild("username").equalTo(username).once("value").then(snapshot => {
      // key will be "ada" the first time and "alan" the second time
          if(snapshot.val()){
            var ref = snapshot.ref;
            this.itemsRef.orderByChild("password").equalTo(password).once("value").then(snapshot => {
              if (snapshot.val()){
                var key = Object.keys(snapshot.val())[0];
                console.log(key);
                var handedness = 0;
                if (snapshot.val().righty == 'true') {
                  handedness = 0
                } else {
                  handedness = 1;
                }
                firebaseApp.database().ref('/users/' + key).once("value").then(snapshot => {
                  var difficulty = snapshot.val() && snapshot.val().difficulty;
                   firebaseApp.database().ref('/users/' + key).once("value").then(snapshot => {
                    var sound = snapshot.val() && snapshot.val().sound;
                    firebaseApp.database().ref('/users/' + key).once("value").then(snapshot => {
                    var handedness = snapshot.val() && snapshot.val().righty;
                    if (handedness == false) {
                       handedness = 1;
                    } else {
                      handedness = 0;
                    }
                    console.log(handedness);
                    navigation.navigate("Home", {key: key, difficulty: difficulty, sound: sound, handedness: handedness});
                  });
                  });
                 });
                }
                //console.log(Object.Object.keys(snapshot.val())[0]);
              else {
                alert("Invalid username or password.");
              }
           });
          } else {
              alert("Invalid username or password.");
          }
        });
    }
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
        <Navbar
          title='LOG IN'
          onPressBack={() => navigation.goBack(null)}
          handleHamburger={() => navigation.navigate('DrawerOpen')}/>

        <Content contentContainerStyle={styles.content}>
          <View style={styles.loginFields}>
            <TextInput
              style={styles.inputField}
              placeholder='Username'
              onChangeText={(username) => this.setState({username})}/>

            <TextInput
              style={styles.inputField}
              placeholder='Password'
              onChangeText={(password) => this.setState({password})}/>

            <TouchableOpacity
              style={styles.textLink}
               onPress={() => navigation.navigate("Welcome")}
             >
             <Text style={styles.text}> Forgot your password? </Text>
            </TouchableOpacity>
          </View>


        <Button style={styles.button}
         label='Log In'
         onPress={(e) => this.handleClick(e)}/>
          <TouchableOpacity
            style={styles.textLink}
             onPress={() => navigation.navigate("Registration")}
           >
           <Text style={styles.text}> Don&#8217;t have an account? </Text>
          </TouchableOpacity>

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
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  button: {
    backgroundColor: '#ffffff',
    marginTop: 18
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
  loginFields: {
    marginTop: '30%',
    marginBottom: '10%'
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
