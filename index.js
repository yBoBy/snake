/**
 * @format
 

import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
*/
import {name as appName} from './app.json';
import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, Button } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems"
 
export default class BestGameEver extends PureComponent {
  constructor() {
    super();
  }
 
  render() {
    return (
      <>
        <Button title = "Reset Game" onPress = {this.reset} />
        <GameEngine
          ref={(ref) => {this.engine = ref}}
          style={styles.container}
          systems={[MoveFinger]}
          entities={{
            1: { position: [40,  200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
            2: { position: [100, 200], renderer: <Finger />}, //-- and a renderer property (optional). If no renderer
            3: { position: [160, 200], renderer: <Finger />}, //-- is supplied with the entity - it won't get displayed.
            4: { position: [220, 200], renderer: <Finger />}
          }}>
  
          <StatusBar hidden={false} />
  
        </GameEngine>
      </>
    );
  }

  reset = () => {
    this.engine.swap({
      1: { position: [40,  200], renderer: <Finger />},
      2: { position: [100, 200], renderer: <Finger />},
      3: { position: [160, 200], renderer: <Finger />},
      4: { position: [220, 200], renderer: <Finger />}
    })
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
 
AppRegistry.registerComponent(appName, () => BestGameEver);
