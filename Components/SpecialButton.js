import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

class SpecialButton extends Component {
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
           {
              <Text style={styles.buttonText}>{this.props.buttonText}</Text>
           }
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: "85%",
    paddingVertical: 20,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 2,
    shadowOpacity: 0.8
  },
  buttonLabel: {
    fontFamily: 'bungee-inline',
    fontSize: 25,
    color: '#2A5D38'
  },
  buttonText: {
    justifyContent: 'center',
    color: 'black',
    alignItems: "flex-end",
    fontSize: 12
  },
});

export default SpecialButton;
