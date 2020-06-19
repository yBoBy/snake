import React, {Component} from 'react';
import {View} from 'react-native';
import Constants from './Constants';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];
    let leftEye1 = 0;
    let leftEye2 = 0;
    let topEye1 = 0;
    let topEye2 = 0;

    if (this.props.direction === Constants.UP) {
      leftEye1 = '20%';
      leftEye2 = '60%';
      topEye1 = '20%';
      topEye2 = 0;
    } else if (this.props.direction === Constants.DOWN) {
      leftEye1 = '20%';
      leftEye2 = '60%';
      topEye1 = '60%';
      topEye2 = '40%';
    } else if (this.props.direction === Constants.RIGHT) {
      leftEye1 = '60%';
      leftEye2 = '60%';
      topEye1 = '20%';
      topEye2 = '40%';
    } else if (this.props.direction === Constants.LEFT) {
      leftEye1 = '20%';
      leftEye2 = '20%';
      topEye1 = '20%';
      topEye2 = '40%';
    }

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
              backgroundColor: Constants.colorSnakeEyes,
              left: leftEye1,
              top: topEye1,
            }}
          />
          <View
            style={{
              width: this.props.size / 5,
              height: this.props.size / 5,
              backgroundColor: Constants.colorSnakeEyes,
              left: leftEye2,
              top: topEye2,
            }}
          />
        </View>
      </>
    );
  }
}
