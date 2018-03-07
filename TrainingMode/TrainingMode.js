import React, { Component } from "react";
import { Font } from 'expo';
import { Alert, StyleSheet, View, Image } from 'react-native';
import { Container, Content, Left, Right, Text, ListItem, Radio } from 'native-base';

import Button from '../Components/Button';

export default class TrainingMode extends Component {
  static navigationOptions = {
    title: 'Training',
  };

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }
  _onPressButton() {
    Alert.alert('Nice job! Accuracy: 95%');
  }

  getAccuracy(shotCoordinate, shotTarget) {
    let [xCoord, yCoord] = shotCoordinate
    let [xCoordTar, yCoordTar] = shotTarget
    distance = (((xCoord - xCoordTar)**2) + ((yCoord - yCoordTar)**2))**0.5
    if (distance < 5) {
      return "veryclose"
    }
    if (distance > 5 && distance <= 15) {
      return "close"
    }
    if (distance > 15 && distance <= 25) {
      return "average"
    }
    if (distance > 25) {
      return "far"
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

    var targetLocations = [];

    return (
      <Container style={styles.container}>
        <View contentContainerStyle={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> Shot: forehand </Text>
          <Text style={styles.text}> Target: T serviceline </Text>
        </View>
          <Image style={styles.court}
            source={require('../assets/images/tenniscourt.png')}
          />

          <Image style={styles.ball}
            source={require('../assets/images/tennisball.png')}
          />
          <Image style={styles.box}
            source={require('../assets/images/box.png')}
          />

          <View style={styles.target}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>

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
    bottom: 50
  },
  text: {
    fontFamily: 'bungee-inline',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 1,
    textAlign: 'center'
  },
  textContainer: {
    margin: 10
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
    height: 16,
    top: 100,
    right: -181
  },
  box: {
    position: 'absolute',
    top: 96,
    right: 171,
    zIndex: 1,
    height: 25,
    width: 25
  },
  target: {
    width: 140/3,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 126 + 100/3,
    left: 121 + 140/3,
  },
  targetText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 10
  }
});
