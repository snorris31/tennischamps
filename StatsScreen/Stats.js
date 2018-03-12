import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { Font } from 'expo';

import Button from '../Components/Button';
import Navbar from '../Components/Navbar';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


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

    const tableDataServe = [
      ['1', '1', '1', '1', '1', '1']
    ];

    const tableDataHand = [
      ['1', '', '2', '', '3'],
      ['4', '', '5', '', '6'],
      ['', '', '', '', '', ''],
      ['1', '', '2', '', '3']
    ];

    if (!this.state.fontLoaded) { return null;}
    return (
      <Container style={styles.container}>
        <Navbar
          title='Statistics'
          onPressBack={() => navigation.navigate("Home")}
          handleHamburger={() => navigation.navigate('DrawerOpen')}/>

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
            source={require('../assets/images/tenniscourt.png')}>
  
            <Table style = {styles.tableHand}>
              <Rows data = {tableDataHand}
              flexArr={[1, 1, 2, 1, 1]}
              style = {styles.row}
              textStyle = {styles.stats}/>
            </Table>

            

          </Image>
          
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
  },
  row: {
    height: 50
  },
  stats: {
    textAlign: 'center'
  },
  tableHand: {
    width: 135,
    marginLeft: '34%',
    marginTop: '14.5%'
  },
  tableServe: {
    width: 135,
    marginLeft: '34%',
    marginTop: '20%' 
  }
});
