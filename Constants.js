import {Dimensions} from 'react-native';
export default (Constants = {
  MAX_WIDTH: Dimensions.get('screen').width,
  MAX_HEIGHT: Dimensions.get('screen').height,

  GRID_SIZE: 10,
  //CELL_SIZE: (MAX_WIDTH * 0.9) / GRID_SIZE,

  colorGridBackGround: 'green',

  colorSnakeHead: 'orange',
  colorSnakeTail: 'yellow',
  colorSnakeApple: 'red',
});
