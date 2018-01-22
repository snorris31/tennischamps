import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

class Button extends Component {
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
      <TouchableOpacity
           style={this.props.style}
           onPress={this.props.onPress}
         >
           {
             this.state.fontLoaded ? (
               <Text style={styles.buttonLabel}>{this.props.label}</Text>
             ) : null
           }
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonLabel: {
    fontFamily: 'bungee-inline',
    fontSize: 18,
    color: '#2A5D38'
  }
});

export default Button;
