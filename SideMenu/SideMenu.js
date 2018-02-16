import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import { Font } from 'expo';
import {NavigationActions} from 'react-navigation';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render () {
        return (
            <Content contentContainerStyle={styles.content}>
                <View style={{flexDirection: 'row'}}>
                    <Text>test</Text>
                    <Text style={styles.text} onPress={this.props.navigation.navigate('Home')}>How to play</Text>
                </View>
                <Text style={styles.text}>Preferences</Text>
                <Text style={styles.text}>Statistics</Text>
                <Text style={styles.text}>Sign out</Text>

                <Button style={styles.button}
                    label='HOW TO PLAY'
                    onPress={() => this.props.navigation.navigate("Instructions")}/>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: '#3f8934',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        margin: 18
    },
    button: {
      backgroundColor: '#ffffff',
      margin: 18,
    }
  });

export default SideMenu;
