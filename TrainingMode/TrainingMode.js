import React, { Component } from "react";
import { Font } from 'expo';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { Container, Content, Left, Right, Text, ListItem, Radio } from 'native-base';

import Button from '../Components/Button';
export default class TrainingMode extends Component {
  static navigationOptions = {
    title: 'Training',
  };

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }



  getAccuracy(shotCoordinate, shotTarget) {
    let [xCoord, yCoord] = shotCoordinate
    let [xCoordTar, yCoordTar] = shotTarget
    distance = (((xCoord - xCoordTar)**2) + ((yCoord - yCoordTar)**2))**0.5
    if (distance < 5) {
      return "veryclose"
    }
    if (distance > 5 && distance <= 15) {
      return "close"
    }
    if (distance > 15 && distance <= 25) {
      return "average"
    }
    if (distance > 25) {
      return "far"
    }

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
    var a = Math.floor(Math.random() * 15) + 1 ;
    var view = null
       

    var targetLocations = [];

    if (a == 1) {
      view = <View style={styles.target}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 2) {
            view = <View style={styles.target2}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>

    } else if (a == 3) {
            view = <View style={styles.target3}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 4) {
            view = <View style={styles.target4}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 5) {
            view = <View style={styles.target5}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    }  else if (a == 6) {
            view = <View style={styles.target6}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 7) {
            view = <View style={styles.target7}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 8) {
            view = <View style={styles.target8}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 9) {
            view = <View style={styles.target9}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 10) {
            view = <View style={styles.target10}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 11) {
            view = <View style={styles.target11}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 12) {
            view = <View style={styles.target12}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 13) {
            view = <View style={styles.target13}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else if (a == 14) {
            view = <View style={styles.target14}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    } else {
      view = <View style={styles.target15}>
            <Text style={styles.targetText}>TARGET</Text>
          </View>
    }




    return (
      <Container style={styles.container}>
        <View contentContainerStyle={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> Shot: forehand </Text>
        </View>
          <Image style={styles.court}
            source={require('../assets/images/tenniscourt.png')}
          />

          <Image style={styles.ball}
            source={require('../assets/images/tennisball.png')}
          />
          <Image style={styles.box}
            source={require('../assets/images/box.png')}
          />
          {view}
          <Button style={styles.button}
           label='End the game'
           onPress={() => this.props.navigation.navigate("EndGameScreen")}
          />
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
  button: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    zIndex: 3,
    bottom: 10,
    left: 60

  },
  text: {
    fontFamily: 'bungee-inline',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 1,
    textAlign: 'center'
  },
  textContainer: {
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
    top: 100,
    right: -181
  },
  box: {
    position: 'absolute',
    top: 96,
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
    top: 90+ 100/3,
    left: 121 + 140/3

  },
  target2: {
    width: 140/3,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 130+ 100/3,
    left: 121 + 140/3

  },
  target3: {
    width: 140/3,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 260+ 100/3,
    left: 121 + 140/3

  },
  target4: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 260+ 100/3,
    left: 50 + 140/3

  },
  target5: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 90+ 100/3,
    left: 50 + 140/3
  },
  target6: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 130+ 100/3,
    left: 50 + 140/3
  },
  target7: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 90+ 100/3,
    left: 215 + 140/3
  },
  target8: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 130+ 100/3,
    left: 215 + 140/3
  },
  target9: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 260+ 100/3,
    left: 215 + 140/3
  },
  target10: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 195+ 100/3,
    left: 75 + 140/3
  },
  target11: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 195+ 100/3,
    left: 97 + 140/3

  },
  target12: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 195+ 100/3,
    left: 120 + 140/3
  },
    target13: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 195+ 100/3,
    left: 147 + 140/3
  },
  target14: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 195+ 100/3,
    left: 170 + 140/3
  },
  target15: {
    width: 140/6,
    height: 100/3,
    backgroundColor: 'red',
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 195+ 100/3,
    left: 192+ 140/3
  },
  targetText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 10
  }
});
