'use strict';

import * as React from 'react';
import {useState} from 'react';
import {Button, View, StyleSheet, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {block} from 'react-native-reanimated';
import Constants from './Constants';
import Head from './Head';
import {SnakeEngine} from './SnakeEngine';
import {GameLoop} from './GameLoop';
import {GameEngine} from 'react-native-game-engine';
import {SettingsScreen} from './SettingsScreen';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

/*Test*/

function MainMenu({navigation}) {
  let Image_Http_URL = {};
  return (
    <View style={{width: '100%', justifyContent: 'center'}}>
      {/* <Image
        source={require('./images/MainMenu/snake.gif')}
        style={{height: 300, width: 300, alignSelf: 'center', margin: 5}}
      /> */}
      <Button
        title="Start a New Game"
        onPress={() => navigation.navigate(' ')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function GameScreen({navigation}) {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <SnakeEngine />
      </View>
    </>
  );
}

function showSettingsScreen({navigation}) {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <SettingsScreen />
      </View>
    </>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Main Menu">
      <Stack.Screen name="Main Menu" component={MainMenu} />
      <Stack.Screen name="Settings" component={showSettingsScreen} />
      <Stack.Screen
        name=" "
        component={GameScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  MainMenuButtonText: {
    fontFamily: 'Cochin',
    textAlign: 'auto',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
