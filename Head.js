import React, {Component} from 'react';
import {View} from 'react-native';
import Constants from './Constants';
import Settings from './Settings';

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

    let tailAddWidthHeight = this.props.size / 2;

    let tailAddLeft = null;
    let tailAddTop = null;

    if (this.props.direction === Constants.UP) {
      leftEye1 = '20%';
      leftEye2 = '60%';
      topEye1 = '20%';
      topEye2 = 0;
      tailAddLeft = x * this.props.size + 0.25 * this.props.size;
      tailAddTop = y * this.props.size + this.props.size;
    } else if (this.props.direction === Constants.DOWN) {
      leftEye1 = '20%';
      leftEye2 = '60%';
      topEye1 = '60%';
      topEye2 = '40%';
      tailAddLeft = x * this.props.size + 0.25 * this.props.size;
      tailAddTop = y * this.props.size - 0.5 * this.props.size;
    } else if (this.props.direction === Constants.RIGHT) {
      leftEye1 = '60%';
      leftEye2 = '60%';
      topEye1 = '20%';
      topEye2 = '40%';
      tailAddLeft = x * this.props.size - 0.5 * this.props.size;
      tailAddTop = y * this.props.size + 0.25 * this.props.size;
    } else if (this.props.direction === Constants.LEFT) {
      leftEye1 = '20%';
      leftEye2 = '20%';
      topEye1 = '20%';
      topEye2 = '40%';
      tailAddLeft = x * this.props.size + this.props.size;
      tailAddTop = y * this.props.size + 0.25 * this.props.size;
    }

    return (
      <>
        <View
          style={{
            width: this.props.size,
            height: this.props.size,
            backgroundColor: Settings.colorSnakeHead,
            position: 'absolute',
            left: x * this.props.size,
            top: y * this.props.size,
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
        {/* <View
          style={{
            position: 'absolute',
            width: tailAddWidthHeight,
            height: tailAddWidthHeight,
            backgroundColor: Settings.colorSnakeTail,
            left: tailAddLeft,
            top: tailAddTop,
          }}
        /> */}
      </>
    );
  }
}
