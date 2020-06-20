import React, { Component } from 'react';
import Settings from './Settings';
import Constants from './Constants'

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    function setColors(arg) {
      if (arg === "dark") {
        console.log('New Colortheme: dark');
        Settings.colorNavigationBar = Constants.COLOR_NAVIGATION_BAR;
      } else if (arg === "light") {
        Settings.colorGridBackGround = 'green'
      } else if (arg === "color") {
        
      }

    }

    function setSpeed(arg) {
      if (arg === "1") {
        Settings.gamespeed = Constants.GAMESPEED_VERY_SLOW;
        console.log("New Gamespeed: " + Settings.gamespeed);
      } else if (arg === "2") {
        Settings.gamespeed = Constants.GAMESPEED_SLOW;
        console.log("New Gamespeed: " + Settings.gamespeed);
      } else if (arg === "3") {
        Settings.gamespeed = Constants.GAMESPEED_NORMAL;
        console.log("New Gamespeed: " + Settings.gamespeed);
      } else if (arg === "4") {
        Settings.gamespeed = Constants.GAMESPEED_FAST;
        console.log("New Gamespeed: " + Settings.gamespeed);
      } else if (arg === "5") {
        Settings.gamespeed = Constants.GAMESPEED_VERY_FAST;
        console.log("New Gamespeed: " + Settings.gamespeed);
      }
    }

    return (
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: "grey"}}>

        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Theme'}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>

          <View style={{ flex: 1, margin: 5}}>
            <TouchableOpacity
              onPress={() => setColors("dark")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: 'darkgrey',
                backgroundColor: 'black',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>DARK</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, margin: 5}}>
            <TouchableOpacity
              onPress={() => setColors("light")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: 'darkgrey',
                backgroundColor: 'white',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'black', textAlign: 'center', margin: 5 }}>LIGHT</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, margin: 5}}>
            <TouchableOpacity
              onPress={() => setColors("color")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: 'darkgrey',
                backgroundColor: 'darkviolet',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>COLORFUL</Text>
            </TouchableOpacity>
          </View>
        </View>


        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Gamespeed'}</Text>

        <View style={{ flexDirection: 'row',justifyContent: 'flex-start', width: '100%'}}>
          <View style={[{
            flex: 1,
            margin: 5,
            backgroundColor: "darkgrey",
            borderWidth: 2,
            borderRadius: 5,
            borderColor: 'darkgrey',
            alignItems: "center",
          }]}>
            <TouchableOpacity
              onPress={() => setSpeed("1")}
              style={{
                backgroundColor: 'darkgrey',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>VERY SLOW</Text>
            </TouchableOpacity>
          </View>

          <View style={[{
            flex: 1,
            margin: 5,
            backgroundColor: "darkgrey",
            borderWidth: 2,
            borderRadius: 5,
            borderColor: 'darkgrey',
            alignItems: "center",
          }]}>
            <TouchableOpacity
              onPress={() => setSpeed("2")}
              style={{
                backgroundColor: 'darkgrey',
                justifyContent: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>SLOW</Text>
            </TouchableOpacity>
          </View>

          <View style={[{
            flex: 1,
            margin: 5,
            backgroundColor: "darkgrey",
            borderWidth: 2,
            borderRadius: 5,
            borderColor: 'darkgrey',
            alignItems: "center",
          }]}>
            <TouchableOpacity
              onPress={() => setSpeed("3")}
              style={{
                backgroundColor: 'darkgrey',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>NORMAL</Text>
            </TouchableOpacity>
          </View>

          <View style={[{
            flex: 1,
            margin: 5,
            backgroundColor: "darkgrey",
            borderWidth: 2,
            borderRadius: 5,
            borderColor: 'darkgrey',
            alignItems: "center",
          }]}>
            <TouchableOpacity
              onPress={() => setSpeed("4")}
              style={{
                backgroundColor: 'darkgrey',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>FAST</Text>
            </TouchableOpacity>
          </View>

          <View style={[{
            flex: 1,
            margin: 5,
            backgroundColor: "darkgrey",
            borderWidth: 2,
            borderRadius: 5,
            borderColor: 'darkgrey',
            alignItems: "center",
          }]}>
            <TouchableOpacity
              onPress={() => setSpeed("5")}
              style={{
                backgroundColor: 'darkgrey',
                alignItems: "center"
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>VERY FAST</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
