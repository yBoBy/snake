import React, {Component} from 'react';
import {View} from 'react-native';
import Constants from './Constants';
import Settings from './Settings'

const randomPosition = (max, excludes = [[0, 0]]) => {
  Math.floor(Math.random() * max);
};

export default (Apple = props => {
  let x = props.position[0];
  let y = props.position[1];

  return (
    <View
      style={{
        width: props.size / 2,
        height: props.size / 2,
        backgroundColor: Settings.colorSnakeApple,
        position: 'absolute',
        left: x * props.size + 0.25 * props.size,
        top: y * props.size + 0.25 * props.size,
      }}
    />
  );
});
