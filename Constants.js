import {Dimensions} from 'react-native';
export default (Constants = {
  MAX_WIDTH: Dimensions.get('screen').width,
  MAX_HEIGHT: Dimensions.get('screen').height,
  RIGHT: [1, 0],
  LEFT: [-1, 0],
  UP: [0, -1],
  DOWN: [0, 1],
  START_POSITION: [4, 5],

  GAMESPEED_VERY_SLOW: 5000,
  GAMESPEED_SLOW: 600,
  GAMESPEED_NORMAL: 500,
  GAMESPEED_FAST: 400,
  GAMESPEED_VERY_FAST: 100,

  COLOR_NAVIGATION_BAR: '#00539C',
  COLOR_GENERAL_BACKGROUND: 'black',
});
