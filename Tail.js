import React, {Component} from 'react';
import {View} from 'react-native';
import Constants from './Constants';
import Settings from './Settings';
import _ from 'underscore';

export default (Tail = props => {
  const VERTICAL = {
    width: props.size / 2,
    height: props.size,
  };
  const HORIZONTAL = {
    width: props.size,
    height: props.size / 2,
  };
  const CORNER = {width: null, height: null, top: null, left: null};
  let tailList = [];
  let leftVal = null;
  let topVal = null;

  for (let i = props.elements.length - 1; i >= 0; i--) {
    let cur = props.elements[i];
    let prev = null;
    if (i > 0) {
      prev = props.elements[i - 1];
      cur.position = prev.position;
      if (prev.orientation === null) {
        cur.orientation = HORIZONTAL;
      } else {
        cur.orientation = prev.orientation;
      }
      cur.containsApple = prev.containsApple;
    } else {
      // cur.position = JSON.parse(JSON.stringify(props.headPosition));
      cur.position = props.headPosition;
      if (
        _.isEqual(props.headDirection, Constants.RIGHT) ||
        _.isEqual(props.headDirection, Constants.LEFT)
      ) {
        cur.orientation = HORIZONTAL;
      } else {
        cur.orientation = VERTICAL;
      }
    }
    console.log(`${i}: ${Object.values(cur.orientation)}`);
    if (_.isEqual(cur.orientation, HORIZONTAL)) {
      leftVal = props.size * cur.position[0];
      topVal = props.size * cur.position[1] + 0.25 * props.size;
      console.log(`Tail(${i}): ${topVal}`);
    } else {
      leftVal = props.size * cur.position[0] + 0.25 * props.size;
      topVal = props.size * cur.position[1];
    }

    tailList.push(
      <View
        key={i}
        style={{
          width: cur.orientation.width,
          height: cur.orientation.height,
          backgroundColor: Settings.colorSnakeTail,
          position: 'absolute',
          left: leftVal,
          top: topVal,
        }}
      />,
    );
  }
  return (
    <View style={{width: props.boardsize, height: props.boardsize}}>
      {tailList}
    </View>
  );
});
