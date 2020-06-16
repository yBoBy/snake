"use strict";
import * as React from 'react';
import { useState } from 'react';
import Constants from './Constants';
import { GameLoop } from './GameLoop';
import Head from './Head';
import { GameEngine } from 'react-native-game-engine';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const SnakeEngine = (props) => {
    let boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    let engine = null;


    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

    return (
        <>
        
        <GameEngine
            ref={(ref) => { engine = ref }}
            style={{ width: boardSize, height: boardSize, flex: null, backgroundColor: '#ffffff' }}
            systems={[GameLoop]}
            entities={{
                head: { position: [0, 5], xSpeed: 1, ySpeed: 0, size: Constants.CELL_SIZE, renderer: <Head /> }
            }}
        />
        <GestureRecognizer
            onSwipeRight={() => engine.dispatch({ type: "right"})}
            onSwipeLeft={() => engine.dispatch({ type: "left"})}
            onSwipeUp={() => engine.dispatch({ type: "up"})}
            onSwipeDown={() => engine.dispatch({ type: "down"})}
            config={config}
            style={{
                flex: 1,
                position: 'absolute',
                //backgroundColor: 'red',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0
            }}
        >
        </GestureRecognizer>
        



        </> 
    );
}


export { SnakeEngine };