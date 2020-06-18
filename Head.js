import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Constants from './Constants';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    return (
      <>
        <View
          style={{
            width: this.props.size,
            height: this.props.size,
            backgroundColor: Constants.colorSnakeHead,
            position: 'absolute',
            left: x * this.props.size,
            top: y * this.props.size,
          }}>
          <View
            style={{
              width: this.props.size / 5,
              height: this.props.size / 5,
              backgroundColor: 'blue',
              left: '20%',
              top: '20%',
            }}
          />
          <View
            style={{
              width: this.props.size / 5,
              height: this.props.size / 5,
              backgroundColor: 'blue',

              left: '60%',
              top: 0,
            }}
          />
        </View>
      </>
    );
  }
}
