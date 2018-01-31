import React, { Component } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, Content, Left, Right, Text, ListItem, Radio } from 'native-base';

import Button from '../Components/Button';
import Navbar from '../Components/Navbar';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Navbar
          title='LOG IN'
          onPressBack={() => navigation.goBack(null)}/>
        <Content contentContainerStyle={styles.content}>
          <View style={styles.loginFields}>
            <TextInput
              style={styles.inputField}
              placeholder='Username'
              onChangeText={(username) => this.setState({username})}
            />

            <TextInput
              style={styles.inputField}
              placeholder='Password'
              onChangeText={(password) => this.setState({password})}
            />

            <TouchableOpacity
              style={styles.textLink}
               onPress={() => navigation.navigate("Home")}
             >
             <Text style={styles.text}> Forgot your password? </Text>
            </TouchableOpacity>
          </View>

          <Button style={styles.button}
           label='Log In'
           onPress={() => navigation.navigate("LogIn")}
          />

          <TouchableOpacity
            style={styles.textLink}
             onPress={() => this.props.navigation.navigate("Registration")}
           >
           <Text style={styles.text}> Don&#8217;t have an account? </Text>
          </TouchableOpacity>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#2A5D38',
    alignItems: 'center',
    justifyContent: 'flex-start'
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
