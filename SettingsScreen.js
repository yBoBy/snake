import React, { Component } from 'react';
import Settings from './Settings';
import Constants from './Constants'

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class SettingsScreen extends Component {
  state = {
    text_T_dark: "DARK",
    text_T_light: "LIGHT",
    text_T_color: "COLORFUL",

    text_G_vslow: "VERY SLOW",
    text_G_slow: "SLOW",
    text_G_normal: "NORMAL",
    text_G_fast: "FAST",
    text_G_vfast: "VERY FAST",

    text_S_small: "SMALL",
    text_S_medium: "MEDIUM",
    text_S_large: "LARGE",
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.findSettings();
  }


  findSettings() {
    switch (Settings.colorGridBackGround) { // TODO: add colors for every theme for correct switch case
      case Constants.COLOR_DARK_GRID: this.setColorTheme('dark'); break;
      case Constants.COLOR_LIGHT_GRID: this.setColorTheme('light'); break;
      case Constants.COLOR_COLOR_GRID: this.setColorTheme('color'); break;
    }

    switch (Settings.gamespeed) {
      case Constants.GAMESPEED_VERY_SLOW: this.setSpeed('1'); break;
      case Constants.GAMESPEED_SLOW: this.setSpeed('2'); break;
      case Constants.GAMESPEED_NORMAL: this.setSpeed('3'); break;
      case Constants.GAMESPEED_FAST: this.setSpeed('4'); break;
      case Constants.GAMESPEED_VERY_FAST: this.setSpeed('5'); break;
      default: console.log('ERROR in Settingsscreen.findSettings gamespeed: unknown value for gamespeed:' + Settings.gamespeed);
    }

    switch (Settings.GRID_SIZE) { // TODO: add colors for every theme for correct switch case
      case Constants.GRIDSIZE_SMALL: this.setSize('small'); break;
      case Constants.GRIDSIZE_MEDIUM: this.setSize('medium'); break;
      case Constants.GRIDSIZE_LARGE: this.setSize('large'); break;
    }
  }

  setColorTheme(arg) {
    // reset state
    this.setState({
      text_T_dark: 'DARK',
      text_T_light: 'LIGHT',
      text_T_color: 'COLORFUL'
    });

    if (arg === "dark") {
      console.log('New Colortheme: dark');
      Settings.colorSnakeHead = Constants.COLOR_DARK_SNAKE_HEAD;
      Settings.colorSnakeTail = Constants.COLOR_DARK_SNAKE_TAIL;
      Settings.colorSnakeEyes = Constants.COLOR_DARK_SNAKE_EYES;
      Settings.colorSnakeApple = Constants.COLOR_DARK_SNAKE_APPLE;
      Settings.colorGridBackGround = Constants.COLOR_DARK_GRID;
      this.setState({
        text_T_dark: 'DARK*',
      });
    } else if (arg === "light") {
      console.log('New Colortheme: light');
      Settings.colorSnakeHead = Constants.COLOR_LIGHT_SNAKE_HEAD;
      Settings.colorSnakeTail = Constants.COLOR_LIGHT_SNAKE_TAIL;
      Settings.colorSnakeEyes = Constants.COLOR_LIGHT_SNAKE_EYES;
      Settings.colorSnakeApple = Constants.COLOR_LIGHT_SNAKE_APPLE;
      Settings.colorGridBackGround = Constants.COLOR_LIGHT_GRID;
      this.setState({
        text_T_light: 'LIGHT*',
      });
    } else if (arg === "color") {
      console.log('New Colortheme: colorful');
      Settings.colorSnakeHead = '#C62168';
      Settings.colorSnakeTail = '#E8B5CE';
      Settings.colorSnakeEyes = '#343148';
      Settings.colorGridBackGround = '#FA9A85';
      Settings.colorSnakeApple = '#9B1B30';
      this.setState({
        text_T_color: 'COLORFUL*'
      });
    }
  }

  setSpeed(arg) {
    // reset state
    this.setState({
      text_G_vslow: "VERY SLOW",
      text_G_slow: "SLOW",
      text_G_normal: "NORMAL",
      text_G_fast: "FAST",
      text_G_vfast: "VERY FAST",
    });
    if (arg === "1") {
      Settings.gamespeed = Constants.GAMESPEED_VERY_SLOW;
      this.setState({
        text_G_vslow: "VERY SLOW*",
      });
    } else if (arg === "2") {
      Settings.gamespeed = Constants.GAMESPEED_SLOW;
      this.setState({
        text_G_slow: "SLOW*",
      });
    } else if (arg === "3") {
      Settings.gamespeed = Constants.GAMESPEED_NORMAL;
      this.setState({
        text_G_normal: "NORMAL*",
      });
    } else if (arg === "4") {
      Settings.gamespeed = Constants.GAMESPEED_FAST;
      this.setState({
        text_G_fast: "FAST*",
      });
    } else if (arg === "5") {
      Settings.gamespeed = Constants.GAMESPEED_VERY_FAST;
      this.setState({
        text_G_vfast: "VERY FAST*",
      });
    }
    console.log("New Gamespeed: " + Settings.gamespeed);
  }

  setSize(arg) {
    this.setState({
      text_S_small: "SMALL",
      text_S_medium: "MEDIUM",
      text_S_large: "LARGE",
    });

    if (arg === "small") {
      Settings.GRID_SIZE = Constants.GRIDSIZE_SMALL;
      this.setState({
        text_S_small: "SMALL*",
      });
    } else if (arg === "medium") {
      Settings.GRID_SIZE = Constants.GRIDSIZE_MEDIUM;
      this.setState({
        text_S_medium: "MEDIUM*",
      });
    } else if (arg === "large") {
      Settings.GRID_SIZE = Constants.GRIDSIZE_LARGE;
      this.setState({
        text_S_large: "LARGE*",
      });
    }
    console.log("New Gridsize: " + Settings.GRID_SIZE);
  }

  render() {
    return (
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: Constants.COLOR_GENERAL_BACKGROUND }}>

        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Theme'}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>

          <View style={{ flex: 1, margin: 5 }}>
            <TouchableOpacity
              onPress={() => this.setColorTheme("dark")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: 'black',
                alignItems: "stretch",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>{this.state.text_T_dark}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, margin: 5 }}>
            <TouchableOpacity
              onPress={() => this.setColorTheme("light")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: 'white',
                alignItems: "stretch",
              }}
            >
              <Text style={{ color: 'black', textAlign: 'center', margin: 5 }}>{this.state.text_T_light}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, margin: 5 }}>
            <TouchableOpacity
              onPress={() => this.setColorTheme("color")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: 'darkviolet',
                alignItems: "stretch",
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center', margin: 5 }}>{this.state.text_T_color}</Text>
            </TouchableOpacity>
          </View>
        </View>


        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Gamespeed'}</Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={[{
            flex: 1,
            margin: 5,
            backgroundColor: Constants.COLOR_BUTTON_COLOR,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: Constants.COLOR_BUTTON_BORDER,
            alignItems: "stretch",
          }]}>
            <TouchableOpacity
              onPress={() => this.setSpeed("1")}
              style={{
                alignItems: "center",
              }}
            >
              <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>{this.state.text_G_vslow}</Text>
            </TouchableOpacity>
          </View>

          <View style={[{
            flex: 1,
            margin: 5,
          }]}>
            <TouchableOpacity
              onPress={() => this.setSpeed("2")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: Constants.COLOR_BUTTON_COLOR,
                alignItems: "stretch",
                flex: 1
              }}
            >
              <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>{this.state.text_G_slow}</Text>
            </TouchableOpacity>
          </View>

          <View style={[{
            flex: 1,
            margin: 5,
          }]}>
            <TouchableOpacity
              onPress={() => this.setSpeed("3")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: Constants.COLOR_BUTTON_COLOR,
                alignItems: "stretch",
                flex: 1
              }}
            >
              <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>{this.state.text_G_normal}</Text>
            </TouchableOpacity>
          </View>

          <View style={[{
            flex: 1,
            margin: 5,
          }]}>
            <TouchableOpacity
              onPress={() => this.setSpeed("4")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: Constants.COLOR_BUTTON_COLOR,
                alignItems: "stretch",
                flex: 1
              }}
            >
              <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>{this.state.text_G_fast}</Text>
            </TouchableOpacity>
          </View>

          <View style={[{
            flex: 1,
            margin: 5,
          }]}>
            <TouchableOpacity
              onPress={() => this.setSpeed("5")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: Constants.COLOR_BUTTON_COLOR,
                alignItems: "stretch",
                flex: 1
              }}
            >
              <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>{this.state.text_G_vfast}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Field Size'}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>

          <View style={{ flex: 1, margin: 5 }}>
            <TouchableOpacity
              onPress={() => this.setSize("small")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: Constants.COLOR_BUTTON_COLOR,
                alignItems: "stretch",
              }}
            >
              <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>{this.state.text_S_small}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, margin: 5 }}>
            <TouchableOpacity
              onPress={() => this.setSize("medium")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: Constants.COLOR_BUTTON_COLOR,
                alignItems: "stretch",
              }}
            >
              <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>{this.state.text_S_medium}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, margin: 5 }}>
            <TouchableOpacity
              onPress={() => this.setSize("large")}
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Constants.COLOR_BUTTON_BORDER,
                backgroundColor: Constants.COLOR_BUTTON_COLOR,
                alignItems: "stretch",
              }}
            >
              <Text style={{ color: Constants.COLOR_BUTTON_TEXT, textAlign: 'center', margin: 5 }}>{this.state.text_S_large}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
