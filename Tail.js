import React, {Component} from 'react';
import {View} from 'react-native';
import Constants from './Constants';
import Settings from './Settings';
import _ from 'underscore';

export default (Tail = props => {
  //Forms
  const TOP_LEFT = 1;
  const TOP_RIGHT = 2;
  const BOTTOM_LEFT = 3;
  const BOTTOM_RIGHT = 4;
  const TOP_BOTTOM = 5;
  const LEFT_RIGHT = 6;

  const VERTICAL_PART = {
    width: props.size * 0.5,
    height: props.size * 0.75,
  };
  const HORIZONTAL_PART = {
    width: props.size * 0.75,
    height: props.size * 0.5,
  };

  const getFormFromHead = (headDirection, current) => {
    if (current.form === null) {
      return LEFT_RIGHT;
    }
    if (_.isEqual(headDirection, Constants.UP)) {
      if (_.isEqual(current.direction, Constants.UP)) return TOP_BOTTOM;
      if (_.isEqual(current.direction, Constants.LEFT)) return TOP_RIGHT;
      if (_.isEqual(current.direction, Constants.RIGHT)) return TOP_LEFT;
    } else if (_.isEqual(headDirection, Constants.DOWN)) {
      if (_.isEqual(current.direction, Constants.DOWN)) return TOP_BOTTOM;
      if (_.isEqual(current.direction, Constants.LEFT)) return BOTTOM_RIGHT;
      if (_.isEqual(current.direction, Constants.RIGHT)) return BOTTOM_LEFT;
    } else if (_.isEqual(headDirection, Constants.LEFT)) {
      if (_.isEqual(current.direction, Constants.LEFT)) return LEFT_RIGHT;
      if (_.isEqual(current.direction, Constants.UP)) return BOTTOM_LEFT;
      if (_.isEqual(current.direction, Constants.DOWN)) return TOP_LEFT;
    } else if (_.isEqual(headDirection, Constants.RIGHT)) {
      if (_.isEqual(current.direction, Constants.RIGHT)) return LEFT_RIGHT;
      if (_.isEqual(current.direction, Constants.UP)) return BOTTOM_RIGHT;
      if (_.isEqual(current.direction, Constants.DOWN)) return TOP_RIGHT;
    }
  };

  const calculateViewParameters = (basePosition, form = null) => {
    let leftNoPadding = basePosition[0] * props.size;
    let topNoPadding = basePosition[1] * props.size;
    let leftPadding = leftNoPadding + props.size * 0.25;
    let topPadding = topNoPadding + props.size * 0.25;
    let part1 = {left: null, top: null, size: null};
    let part2 = {left: null, top: null, size: null};

    switch (form) {
      case TOP_LEFT:
        part1.left = leftPadding;
        part1.top = topNoPadding;
        part2.left = leftNoPadding;
        part2.top = topPadding;
        part1.size = VERTICAL_PART;
        part2.size = HORIZONTAL_PART;
        break;
      case TOP_RIGHT:
        part1.left = leftPadding;
        part1.top = topNoPadding;
        part2.left = leftPadding;
        part2.top = topPadding;
        part1.size = VERTICAL_PART;
        part2.size = HORIZONTAL_PART;
        break;
      case BOTTOM_LEFT:
        part1.left = leftPadding;
        part1.top = topPadding;
        part2.left = leftNoPadding;
        part2.top = topPadding;
        part1.size = VERTICAL_PART;
        part2.size = HORIZONTAL_PART;
        break;
      case BOTTOM_RIGHT:
        part1.left = leftPadding;
        part1.top = topPadding;
        part2.left = leftPadding;
        part2.top = topPadding;
        part1.size = VERTICAL_PART;
        part2.size = HORIZONTAL_PART;
        break;
      case LEFT_RIGHT:
        part1.left = leftNoPadding;
        part1.top = topPadding;
        part2.left = leftPadding;
        part2.top = topPadding;
        part1.size = HORIZONTAL_PART;
        part2.size = HORIZONTAL_PART;
        break;
      case TOP_BOTTOM:
        part1.left = leftPadding;
        part1.top = topPadding;
        part2.left = leftPadding;
        part2.top = topNoPadding;
        part1.size = VERTICAL_PART;
        part2.size = VERTICAL_PART;
        break;
      default:
        console.log(
          'Critical Error @ Tail.calculateViewParameters SWITCH_CASE',
        );
    }

    return {part1: part1, part2: part2};
  };

  let tailList = [];
  let partValues = null;

  for (let i = props.elements.length - 1; i >= 0; i--) {
    let cur = props.elements[i];
    let prev = null;
    //Restliche Tail-Elemente
    if (i > 0) {
      prev = props.elements[i - 1];
      cur.isCornerPart = prev.isCornerPart;
      cur.position = prev.position;
      if (prev.form === null) {
        //Set LEFT_RIGHT (Horizontal), because form of initial element is 'null'
        cur.form = LEFT_RIGHT;
      } else {
        cur.form = prev.form;
      }
      cur.containsApple = prev.containsApple;

      partValues = calculateViewParameters(cur.position, cur.form);
    }

    //Tail-Element direkt nach Kopf
    else {
      if (props.headDirection === null) {
        props.headDirection = Constants.RIGHT;
      }

      if (props.headPosition === null) {
        cur.position = Object.values(Constants.START_POSITION);
      } else {
        cur.position = props.headPosition;
      }

      cur.form = getFormFromHead(props.headDirection, cur);

      partValues = calculateViewParameters(
        cur.position,
        cur.form,
      );

      cur.direction = Object.values(props.headDirection);
    }

    tailList.push(
      <View
        key={'Part1.' + i}
        style={{
          position: 'absolute',
          backgroundColor: Settings.colorSnakeTail,
          width: partValues.part1.size.width,
          height: partValues.part1.size.height,
          left: partValues.part1.left,
          top: partValues.part1.top,
        }}
      />,
      <View
        key={'Part2.' + i}
        style={{
          position: 'absolute',
          backgroundColor: Settings.colorSnakeTail,
          width: partValues.part2.size.width,
          height: partValues.part2.size.height,
          left: partValues.part2.left,
          top: partValues.part2.top,
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
