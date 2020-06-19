import React, {Component} from 'react';
import {View} from 'react-native';
import Constants from './Constants';

export default (Tail = props => {
  for (let i = props.elements.length - 1; i >= 0; i--) {
    cur = props.elements[i];
    prev = null;
    if (i > 0) {
      prev = props.elements[i - 1];

      cur.position = prev.position;
      cur.orientation = prev.orientation;
      cur.containsApple = prev.containsApple;
      cur.isCornerPart = prev.isCornerPart;
    } else {
      cur.position = head.position;
      if (head.orientation === RIGHT || head.orientation === LEFT) {
      }
    }
    return <View />;
  }
});
