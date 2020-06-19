import React, { Component } from 'react';

import {
  View,
  Button,
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
        console.log("dark");
      } else if (arg === "light") {
        console.log("light");
      } else if (arg === "color") {
        console.log("color");
      }

    }

    function setSpeed(arg) {
      if (arg === "1") {
        console.log("very slow speed");
      } else if (arg === "2") {
        console.log("sloow speed");
      } else if (arg === "3") {
        console.log("normal speed");
      } else if (arg === "4") {
        console.log("fast speed");
      } else if (arg === "5") {
        console.log("very fast speed");
      }
    }

    return (
      <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>

        <Text >{'Theme'}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>

          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <TouchableOpacity
              onPress={() => setColors("dark")}
              style={{
                backgroundColor: 'blue',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>DARK</Text>
            </TouchableOpacity>
          </View>

          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <TouchableOpacity
              onPress={() => setColors("light")}
              style={{
                backgroundColor: 'blue',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>LIGHT</Text>
            </TouchableOpacity>
          </View>

          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <TouchableOpacity
              onPress={() => setColors("color")}
              style={{
                backgroundColor: 'blue',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>COLORFUL</Text>
            </TouchableOpacity>
          </View>
        </View>


        <Text >{'Gamespeed'}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%', backgroundColor: 'lightblue' }}>
          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <TouchableOpacity
              onPress={() => setSpeed("1")}
              style={{
                backgroundColor: 'grey',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>VERY SLOW</Text>
            </TouchableOpacity>
          </View>

          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <TouchableOpacity
              onPress={() => setSpeed("2")}
              style={{
                backgroundColor: 'grey',
                justifyContent: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>SLOW</Text>
            </TouchableOpacity>
          </View>

          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <TouchableOpacity
              onPress={() => setSpeed("3")}
              style={{
                backgroundColor: 'grey',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>NORMAL</Text>
            </TouchableOpacity>
          </View>

          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <TouchableOpacity
              onPress={() => setSpeed("4")}
              style={{
                backgroundColor: 'grey',
                alignItems: "center",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>FAST</Text>
            </TouchableOpacity>
          </View>

          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <TouchableOpacity
              onPress={() => setSpeed("5")}
              style={{
                backgroundColor: 'grey',
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
