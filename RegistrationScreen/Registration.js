import React, { Component } from "react";
import { StyleSheet, TextInput, Switch, View } from 'react-native';
import { Container, Header, Title, Content, Left, Right, Body, Icon, Text, ListItem, Radio } from 'native-base';
import * as firebase from 'firebase';
import Button from '../Components/Button';

const firebaseConfig = {
  apiKey: "AIzaSyCQrnN2gZJaFatH-ICtWNxhcZvQbWAHhis",
  authDomain: "single-kingdom-126207.firebaseapp.com",
  databaseURL: "https://single-kingdom-126207.firebaseio.com/",
  storageBucket: "gs://single-kingdom-126207.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

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
      'Ionicons': require('../node_modules/native-base/Fonts/Ionicons.ttf'),
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

    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Registration</Title>
          </Body>
          {/*<Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>*/}
          <Right />
        </Header>
        <Content contentContainerStyle={styles.container}>
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

          {/* <Switch
            onValueChange={ (value) => this.setState({handedness: value}) }
            handedness={this.state.handedness}
          />*/}
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
    flex: 1,
    backgroundColor: '#2A5D38',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: 18,
    width: 250,
    paddingVertical: 10,
    borderRadius: 5
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
  title: {
    fontFamily: 'bungee-inline',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
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
  },
  header: {
    backgroundColor: '#2A5D38'
  }
});
