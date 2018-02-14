import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Left, Right, Body, Text, Button} from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'bungee-inline': require('../assets/fonts/BungeeInline-Regular.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) { return null;}
    return (
      <Header style={styles.header}>
        <Button transparent
          onPress={this.props.onPressBack}>
          <Ionicons name='ios-arrow-back' size={32} color='#ffffff'/>
        </Button>
        <Body>
          <Title style={styles.title}>{this.props.title}</Title>
        </Body>
        <Button transparent>
          <Ionicons name='md-menu' size={32} color='#ffffff'/>
        </Button>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2A5D38',
    display: 'flex',
    alignContent: 'center'
  },
  title: {
    fontFamily: 'bungee-inline',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  button: {
    padding: 0
  }
});

export default Navbar;
