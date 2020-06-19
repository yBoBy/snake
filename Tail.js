import React, {Component} from 'react';
import {View} from 'react-native';
import Constants from './Constants';

export default (Tail = (head, elements) => {
  for (let i = elements.length - 1; i >= 0; i--) {
    cur = elements[i];
    prev = null;
    if (i > 0) {
      prev = elements[i - 1];

      cur.position = prev.position;
      cur.orientation = prev.orientation;
      cur.containsApple = prev.containsApple;
      cur.isCornerPart = prev.isCornerPart;
    }
    else{
        
    

    return <View />;
  }
});
