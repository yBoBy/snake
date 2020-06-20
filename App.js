'use strict';

import * as React from 'react';
import { useState } from 'react';
import { Button, View, StyleSheet, Text, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { block } from 'react-native-reanimated';
import Constants from './Constants';
import Head from './Head';
import { SnakeEngine } from './SnakeEngine';
import { GameLoop } from './GameLoop';
import { GameEngine } from 'react-native-game-engine';
import SettingsScreen from './SettingsScreen';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { NavigationActions } from 'react-navigation';
import Settings from './Settings'
import { TouchableOpacity } from 'react-native-gesture-handler';

/*Test*/

function MainMenu({ navigation }) {
  // hide Statusbar when in game
  StatusBar.setHidden(true);

  return (
    <View style={{ width: '100%', flex: 1, justifyContent: "flex-start", backgroundColor: Constants.COLOR_GENERAL_BACKGROUND, padding: 5 }}>
      <Image
        source={require('./images/MainMenu/snake.gif')}
        style={{maxHeight: '50%', resizeMode: 'contain', alignSelf: 'center', margin: 5}}
      />
      <View style={[{
        margin: 5,
        backgroundColor: Constants.COLOR_BUTTON_COLOR,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Constants.COLOR_BUTTON_BORDER,
        alignItems: "stretch",
      }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate(' ')}
          style={{
            alignItems: "center",
          }}
        >
          <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>START A NEW GAME</Text>
        </TouchableOpacity>
      </View>

      <View style={[{
        margin: 5,
        backgroundColor: Constants.COLOR_BUTTON_COLOR,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Constants.COLOR_BUTTON_BORDER,
        alignItems: "stretch",
      }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{
            alignItems: "center",
          }}
        >
          <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>SETTINGS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function GameScreen({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SnakeEngine />
      </View>
    </>
  );
}

function showSettingsScreen({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            backgroundColor: Constants.COLOR_NAVIGATION_BAR,
          },
        }}
      />
      <Stack.Screen name="Settings" component={showSettingsScreen}
        options={{
          headerShown: true,
          title: 'Settings',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Constants.COLOR_NAVIGATION_BAR,
          }
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
