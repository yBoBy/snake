import React, { Component } from 'react';
import { View } from 'react-native';
import Constants from './Constants';
import Settings from './Settings';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];

    let stepSizeX = 0;
    let stepSizeY = 0;
    if (Settings.step > 0) {
      stepSizeX = (this.props.size / Settings.totalSteps) * Settings.step;
      stepSizeY = (this.props.size / Settings.totalSteps) * Settings.step;
    }

    let leftEye1 = 0;
    let leftEye2 = 0;
    let topEye1 = 0;
    let topEye2 = 0;





    if (this.props.direction === Constants.UP) {
      leftEye1 = '20%';
      leftEye2 = '60%';
      topEye1 = '20%';
      topEye2 = 0;
      stepSizeX = 0;
      stepSizeY *= -1;
    } else if (this.props.direction === Constants.DOWN) {
      leftEye1 = '20%';
      leftEye2 = '60%';
      topEye1 = '60%';
      topEye2 = '40%';
      stepSizeX = 0;
    } else if (this.props.direction === Constants.RIGHT) {
      leftEye1 = '60%';
      leftEye2 = '60%';
      topEye1 = '20%';
      topEye2 = '40%';
      stepSizeY = 0;
    } else if (this.props.direction === Constants.LEFT) {
      leftEye1 = '20%';
      leftEye2 = '20%';
      topEye1 = '20%';
      topEye2 = '40%';
      stepSizeY = 0;
      stepSizeX *= -1;
    }

    //console.log("Step size X: " + stepSizeX);
    //console.log("Step size Y: " + stepSizeY);

    //Settings.step += 1;

    return (
      <>
        <View
          style={{
            width: this.props.size,
            height: this.props.size,
            backgroundColor: Settings.colorSnakeHead,
            position: 'absolute',
            left: x * this.props.size + stepSizeX,
            top: y * this.props.size + stepSizeY,
          }}>
          <View
            style={{
              width: this.props.size / 5,
              height: this.props.size / 5,
              backgroundColor: Settings.colorSnakeEyes,
              left: leftEye1,
              top: topEye1,
            }}
          />
          <View
            style={{
              width: this.props.size / 5,
              height: this.props.size / 5,
              backgroundColor: Settings.colorSnakeEyes,
              left: leftEye2,
              top: topEye2,
            }}
          />
        </View>
      </>
    );
  }
}
