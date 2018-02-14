import React, { Component } from "react";
import { StyleSheet, TextInput, View } from 'react-native';
import { Container, Content, Left, Right, Text, ListItem, Radio } from 'native-base';
import * as firebase from 'firebase';
import Button from '../Components/Button';
import Navbar from '../Components/Navbar';
import ToggleSwitch from 'toggle-switch-react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class Preferences extends Component {

  constructor(props) {
    super(props);
    const {state} = this.props.navigation;
    console.log(state.params);
    window.currUser = state.params.key;
    this.itemsRef = firebaseApp.database().ref();
    this.state = {
      fontLoaded: false,
      isOn: this.state.sound,
      key: state.params.key,
      handedness: state.params.handedness,
      difficultyTypes: state.params.difficulty
    }
  
    //const {key} = this.itemsRef.child(state.params.username);
    //console.log(this.state.difficultyTypes);
  }

  handleDifficulty = (value) => {
      var updates = {};
      console.log("diff", value);
      console.log(this.state.key);
      console.log('/users/' + this.state.key + '/difficulty');
      updates['/users/' + this.state.key + '/difficulty'] = value;
      console.log(updates);
      return this.itemsRef.update(updates);
      // key will be "ada" the first time and "alan" the second time
  }

  getDiff = async() => {
    return new Promise((resolve, reject) => {
      firebaseApp.database().ref('/users/' + currUser).once('value').then(function(snapshot) {
        return snapshot.val().difficulty;
      }),
      function(err, tick) {
        if (err) {
          reject("it broke");
        } else {
          resolve("it worked");
        }
      }

    });
  }
  componentWillMount = async() => {
   var difficulty = false;
   let promise = new Promise((resolve, reject) => {
      firebaseApp.database().ref('/users/' + currUser).once('value').then(function(snapshot) {
        difficulty = snapshot.val().difficulty;
        console.log(difficulty);
      });
     setTimeout(function(){
        resolve(difficulty); // Yay! Everything went well!
      }, 250);
    });
    console.log(promise);
    promise.then((result) => {
      console.log("res", result);
      this.setState({difficultyTypes: result});
    });
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'bungee-inline': require('../assets/fonts/BungeeInline-Regular.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  toggleRighty() {
    this.setState({
      righty: true,
      lefty: false
    });
  }

  toggleLefty() {
    this.setState({
      righty: false,
      lefty: true
    });
  }

  render() {
    if (!this.state.fontLoaded) { return null;}
    if (!this.state.difficultyTypes) { return null;}
    const { navigation } = this.props;
    const radio_props = [{label: 'Easy ', value: 0 }, {label: 'Medium ', value: 1 }, {label: 'Hard ', value: 2 }];
    const dominance_props = [{label: 'Right-Handed ', handedness: 0 }, {label: 'Left-Handed ', handedness: 1 }];


    return (
      <Container style={styles.container}>
        <Navbar
          title='PREFERENCES'
          onPressBack={() => navigation.goBack(null)}/>
        <Content contentContainerStyle={styles.content}>
          <ToggleSwitch
            isOn={this.state.sound}
            onColor='steelblue'
            offColor='red'
            label='SOUND: '
            labelStyle={{textAlign: 'center', fontFamily: 'bungee-inline', fontSize: 30, fontWeight: 'bold', color: '#ffffff'}}
            size='medium'
            onToggle={ (isOn) => this.setState({isOn})}
          />
          <View style={styles.contentButtons}>
          <Text style={styles.text}>DIFFICULTY: </Text>
          <RadioForm
            radio_props={radio_props}
            initial={this.state.difficultyTypes}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#ffffff'}
            buttonInnerColor={'green'}
            buttonSize = {20}
            animation={true}
            onPress={(value) => {this.handleDifficulty(value)}}
          />
          <Text style={styles.text}>HAND - DOMINANCE: </Text>
          <RadioForm
            radio_props={this.state.handedness}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#ffffff'}
            animation={true}
            onPress={(value) => {this.handleDifficulty(value)}}
          />
          </View>

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
    margin: 30,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  contentButtons: {
    margin: 6,
    width: 250,
  },
  button: {
    backgroundColor: '#ffffff',
    margin: 18
  },
  inputField: {
    height: 40,
    width: 250,
    margin: 6,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    color: '#000000',
    paddingHorizontal: 6
  },
  text: {
    color: '#ffffff',
    fontFamily: 'bungee-inline',
    marginVertical: 12,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 6
  },
  radioActive: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
  },
  toggles: {
    backgroundColor: '#ffffff',
    margin: 6,
    width: 250
  },
  toggleitem: {
    width: '90%',
    margin: 6,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff'
  }
});
