'use strict';

import * as React from 'react';
import {useState} from 'react';
import {Button, View, StyleSheet, Text, Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {block} from 'react-native-reanimated';
import Constants from './Constants';
import Head from './Head';
import {SnakeEngine} from './SnakeEngine';
import {GameLoop} from './GameLoop';
import {GameEngine} from 'react-native-game-engine';
import SettingsScreen from './SettingsScreen';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { NavigationActions } from 'react-navigation';
import Settings from './Settings'

/*Test*/

function MainMenu({navigation}) {
  // hide Statusbar when in game
  StatusBar.setHidden(true);

  navigation.setOptions({
    headerShown: true,
    title: 'Settings',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Settings.colorNavigationBar,
    }
  })

  return (
    <View style={{width: '100%', flex: 1, justifyContent:"flex-start",  backgroundColor: "grey", padding: 5}}>
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
      <Button
        title="Update UI Colors"
        onPress={() => navigation.setOptions({
          headerShown: true,
          title: 'Settings',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Settings.colorNavigationBar,
          }
        })}
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
  navigation.setOptions({
    headerShown: true,
    title: 'Settings',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Settings.colorNavigationBar,
    }
  })
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
      <Stack.Screen name="Main Menu" component={MainMenu}
        options={{
          headerShown: true,
          title: 'Snake - Main Menu',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Settings.colorNavigationBar,
          },
        }}
      />
      <Stack.Screen name="Settings" component={showSettingsScreen}
        options={{
          headerShown: true,
          title: 'Settings',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Settings.colorNavigationBar,
          },
        }}
      />
      <Stack.Screen
        name=" "
        component={GameScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
