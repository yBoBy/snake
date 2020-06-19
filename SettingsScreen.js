import React, { Component } from 'react';

import {
  View,
  Button,
  Text,
  StyleSheet,
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>

          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <Button
              onPress={() => setColors("dark")}
              title="Dark"
            />
          </View>
          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <Button
              onPress={() => setColors("light")}
              title="Light"
            />
          </View>
          <View style={[{ flex: 1, margin: 5, backgroundColor: "grey" }]}>
            <Button
              onPress={() => setColors("color")}
              title="Colorful"
            />
          </View>
        </View>

        <Text >{'Gamespeed'}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', backgroundColor: 'lightblue', alignItems: 'center' }}>

          <View style={[{flex: 1, margin: 5, backgroundColor: "grey", height: 100}]}>
            <Button
              onPress={() => setSpeed("1")}
              title="very slow"
            />
          </View>
          <View style={[{flex: 1, margin: 5, backgroundColor: "grey", height: 100}]}>
            <Button
              onPress={() => setSpeed("2")}
              title="slow"
            />
          </View>
          <View style={[{flex: 1, margin: 5, backgroundColor: "grey", height: 100}]}>
            <Button
              onPress={() => setSpeed("3")}
              title="normal"
            />
          </View>
          <View style={[{flex: 1, margin: 5, backgroundColor: "grey", height: 100}]}>
            <Button
              onPress={() => setSpeed("4")}
              title="fast"
            />
          </View>
          <View style={[{flex: 1, margin: 5, backgroundColor: "grey", height: 100}]}>
            <Button
              onPress={() => setSpeed("5")}
              title="very fast"
            />
          </View>
        </View>
      </View>
      
    );
  }
}
