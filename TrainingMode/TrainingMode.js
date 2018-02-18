import React, { Component } from "react";
import { Font } from 'expo';
import { StyleSheet, View, Image } from 'react-native';
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
  text: {
    fontFamily: 'bungee-inline',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
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
    top: 82,
    right: -180
  },
  box: {
    position: 'absolute',
    top: 77,
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
    top: 106 + 100/3,
    left: 121 + 140/3,
  },
  targetText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 10
  }
});
