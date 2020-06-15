"use strict";
import * as React from 'react';
import { useState } from 'react';
import Constants from './Constants';
import { GameLoop } from './GameLoop';
import Head from './Head';
import { GameEngine } from 'react-native-game-engine';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

function SnakeEngine() {
    let boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    let engine = null;
    const [speed, setSpeed] = useState({ xSpeed: 0, ySpeed: 0, });



    return (
        
            <GameEngine
                ref={(ref) => { engine = ref }}
                style={{ width: boardSize, height: boardSize, flex: null, backgroundColor: '#ffffff' }}
                systems={[GameLoop]}
                entities={{
                    head: { position: [0, 5], speed: speed, size: Constants.CELL_SIZE, renderer: <Head /> }
                }}

            />
        
    );
}


export { SnakeEngine };