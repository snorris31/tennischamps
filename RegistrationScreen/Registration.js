import React, { Component } from "react";
import { StyleSheet, TextInput, View } from 'react-native';
import { Container, Content, Left, Right, Text, ListItem, Radio } from 'native-base';
import * as firebase from 'firebase';
import Button from '../Components/Button';
import Navbar from '../Components/Navbar';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref();
    this.state = {
      email: '',
      username: '',
      password: '',
      righty: true,
      lefty: false,
      fontLoaded: false
    };
  }

  handleClick = () => {
     this.itemsRef.push({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          righty: this.state.righty,
          lefty: this.state.lefty
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
    const { navigation } = this.props;

    if (!this.state.fontLoaded) { return null;}

    return (
      <Container style={styles.container}>
        <Navbar
          title='CREATE AN ACCOUNT'
          onPressBack={() => navigation.goBack(null)}/>
        <Content contentContainerStyle={styles.content}>
          <TextInput style={styles.inputField}
            placeholder='Email'
            onChangeText={(email) => this.setState({email})}
          />

          <TextInput style={styles.inputField}
            placeholder='Username'
            onChangeText={(username) => this.setState({username})}
          />

          <TextInput style={styles.inputField}
            placeholder='Password'
            onChangeText={(password) => this.setState({password})}
          />

          <TextInput style={styles.inputField}
            placeholder='Re-Type Password'
            onChangeText={(password) => this.setState({password})}
          />

          <View style={styles.toggles}>
          <Text style={styles.text}>Hand Dominance:</Text>
          <ListItem
            style={styles.toggleitem}
            selected={this.state.righty}
            onPress={() => this.toggleRighty()}
          >
            <Left>
              <Text>Righty</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.righty}
                onPress={() => this.toggleRighty()}
              />
            </Right>
          </ListItem>
          <ListItem
            style={styles.toggleitem}
            selected={this.state.lefty}
            onPress={() => this.toggleLefty()}
          >
            <Left>
              <Text>Lefty</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.lefty}
                onPress={() => this.toggleLefty()}
              />
            </Right>
          </ListItem>
          </View>

          <Button style={styles.button}
           label='Register'
           onPress={(e) => this.handleClick(e)}
          />
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
    justifyContent: 'center'
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
    marginVertical: 12,
    marginHorizontal: 6
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
