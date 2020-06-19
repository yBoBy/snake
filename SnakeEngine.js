'use strict';
import * as React from 'react';
import {useState} from 'react';
import Constants from './Constants';
import {GameLoop} from './GameLoop';
import Head from './Head';
import Tail from './Tail';
import Apple from './Apple';
import CustomTimer from './CustomTimer';
import {GameEngine} from 'react-native-game-engine';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {Alert} from 'react-native';
import Settings from './Settings';

const SnakeEngine = props => {
  const CELL_SIZE = Math.round(
    (Constants.MAX_WIDTH * 0.9) / Settings.GRID_SIZE,
  );
  const boardSize = CELL_SIZE * Settings.GRID_SIZE;
  let engine = null;
  let customTimer = new CustomTimer(Settings.gamespeed);
  const [running, setRunning] = useState(true);

  const gestureConfig = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 80,
  };

  const onEvent = e => {
    if (e.type === 'game-over') {
      Alert.alert('Game Over!');
      setRunning(false);
    }
  };

  return (
    <>
      <GameEngine
        ref={ref => {
          engine = ref;
        }}
        style={{
          width: boardSize,
          height: boardSize,
          flex: null,
          backgroundColor: '#ffffff',
        }}
        systems={[GameLoop]}
        entities={{
          head: {
            position: Constants.START_POSITION,
            direction: Constants.RIGHT,
            size: CELL_SIZE,
            xyMax: Settings.GRID_SIZE,
            renderer: <Head />,
          },
          // tail: {
          //   elements: [
          //     {
          //       position: [
          //         Constants.START_POSITION[0] - 1,
          //         Constants.START_POSITION[1],
          //       ],
          //       orientation: null,
          //       containsApple: false,
          //       isCornerPart: false,
          //     },
          //   ],
          //   head: null,
          //   renderer: <Tail />,
          // },
          // apple: {
          //   position: null,
          //   renderer: <Apple />,
          // },
        }}
        timer={customTimer}
        running={running}
        onEvent={onEvent}
      />
      <GestureRecognizer
        onSwipeRight={() => engine.dispatch({type: 'right'})}
        onSwipeLeft={() => engine.dispatch({type: 'left'})}
        onSwipeUp={() => engine.dispatch({type: 'up'})}
        onSwipeDown={() => engine.dispatch({type: 'down'})}
        config={gestureConfig}
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0,
        }}
      />
    </>
  );
};

export {SnakeEngine};
