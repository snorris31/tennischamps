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
           style={[this.props.style, styles.button]}
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
  button: {
    alignItems: 'center',
    width: 250,
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.8
  },
  buttonLabel: {
    fontFamily: 'bungee-inline',
    fontSize: 18,
    color: '#2A5D38'
  }
});

export default Button;
