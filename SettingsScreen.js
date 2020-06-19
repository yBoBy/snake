import React, { Component } from 'react';

import {
    View,
    Button,
} from 'react-native'

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.MainMenuButtonText}>
          {'Placeholder for Settings'}
        </Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    )
  }   
}