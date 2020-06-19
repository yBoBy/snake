import {Dimensions} from 'react-native';
export default (Constants = {
  MAX_WIDTH: Dimensions.get('screen').width,
  MAX_HEIGHT: Dimensions.get('screen').height,
  RIGHT: [1, 0],
  LEFT: [-1, 0],
  UP: [0, -1],
  DOWN: [0, 1],

  GRID_SIZE: 15,
  //CELL_SIZE: (MAX_WIDTH * 0.9) / GRID_SIZE,

  colorGridBackGround: 'green',
  gamespeed: 500,

  colorSnakeHead: 'orange',
  colorSnakeEyes: 'blue',
  colorSnakeTail: 'yellow',
  colorSnakeApple: 'red',
});
