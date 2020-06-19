import React, {Component} from 'react';
import {View} from 'react-native';
import Constants from './Constants';
import Settings from './Settings';

export default (Tail = props => {
  const VERTICAL = {
    width: props.size / 2,
    height: props.size,
    top: null,
    left: null,
  };
  const HORIZONTAL = {
    width: props.size,
    height: props.size / 2,
    top: null,
    left: null,
  };
  const CORNER = {width: null, height: null, top: null, left: null};
  let tailList = [];

  for (let i = props.elements.length - 1; i >= 0; i--) {
    let cur = props.elements[i];
    //console.log(`Tail ${i} orientation: ${cur.orientation.width}`);

    //console.log(cur);
    let prev = null;
    if (i > 0) {
      prev = JSON.parse(JSON.stringify(props.elements[i - 1]));
      console.log('Tail 1 after head pos: ' + props.elements[i - 1].position);
      console.log('Tail 2 after head pos: ' + cur.position);

      cur.position[0] = JSON.parse(JSON.stringify(prev.position[0]));
      cur.position[1] = JSON.parse(JSON.stringify(prev.position[1]));
      if (prev.orientation === null) {
        cur.orientation = HORIZONTAL;
      }
      cur.containsApple = prev.containsApple;
    } else {
      console.log('Head pos: ' + props.headPosition);
      console.log('Tail after head pos: ' + cur.position);
      cur.position = JSON.parse(JSON.stringify(props.headPosition));
      console.log('Head dir: ' + props.headDirection);

      //console.log(props.head.direction);
      if (
        props.headDirection === Constants.RIGHT ||
        props.headDirection === Constants.LEFT
      ) {
        cur.orientation = HORIZONTAL;
      } else {
        cur.orientation = VERTICAL;
      }
    }
    //console.log(`Tail ${i} orientation: ${cur.orientation.width}`);

    tailList.push(
      <View
        key={i}
        style={{
          width: cur.orientation.width,
          height: cur.orientation.height,
          backgroundColor: Settings.colorSnakeTail,
          position: 'absolute',
          left: props.size * cur.position[0],
          top: props.size * cur.position[1],
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
