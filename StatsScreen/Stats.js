import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { Font } from 'expo';

import Button from '../Components/Button';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default class Stats extends React.Component {
  static navigationOptions = {
    title: 'Statistics',
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
    const radio_props = [
      {label: 'Forehand ', value: 0 }, 
      {label: 'Backhand ', value: 1 }, 
      {label: 'Serve ', value: 2 }
    ];

    if (!this.state.fontLoaded) { return null;}
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <View style={styles.contentButtons}>
            <Text style={styles.text}> Shot Type: </Text>
            <RadioForm
              style={styles.radio}
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#ffffff'}
              labelColor = {'#ffffff'}
              selectedLabelColor = {'#ffffff'}
              buttonSize= {18}
              animation={false}
              onPress={(value) => {this.setState({value:value})}}/>
          </View>


          <Image style={styles.court}
            source={require('../assets/images/tenniscourt.png')}/>
          
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
    margin: 20,
    fontFamily: 'bungee-inline',
    marginLeft: 20,
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firsttext: {
    color: '#ffffff',
    margin: 20,
    fontFamily: 'bungee-inline',
    marginLeft: 40,
    marginTop: 60,
    fontSize: 22
  },
  court: {
    height: 525,
    width: 400,
    alignSelf: 'center',
    resizeMode: 'contain',
    zIndex: 0,
    marginTop: 40
  },
  radio: {
    marginVertical: 12,
    marginLeft: 30
  }
});
