'use strict';

import * as React from 'react';
import { View, Text, Image, StatusBar, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from './Constants';
import { SnakeEngine } from './SnakeEngine';
import SettingsScreen from './SettingsScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

/*Test*/

function MainMenu({ navigation }) {
  // hide Statusbar when in game
  StatusBar.setHidden(true);

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", backgroundColor: Constants.COLOR_GENERAL_BACKGROUND, padding: 5 }}>
      <Image
        // source: https://giphy.com/gifs/1990s-shohQj1Ju9fJC
        source={require('./images/MainMenu/giphy.gif')}
        style={{
          maxHeight: '50%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
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
