import { Dimensions } from 'react-native';
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

  // Gridsize configuration
  GRIDSIZE_SMALL: 10,
  GRIDSIZE_MEDIUM: 15,
  GRIDSIZE_LARGE: 30,

  // Button configuration
  COLOR_NAVIGATION_BAR: '#264E36',
  COLOR_GENERAL_BACKGROUND: "#797B3A",
  COLOR_BUTTON_COLOR: '#00539C',
  COLOR_BUTTON_BORDER: '#F0EAD6',
  COLOR_BUTTON_TEXT: '#E08119',

  // Colors for DARK mode
  // NOTE: for correct behaviour at least GRID hsa to be different between modes
  COLOR_DARK_SNAKE_HEAD: '#4d79ff',
  COLOR_DARK_SNAKE_TAIL: '#002db3',
  COLOR_DARK_SNAKE_EYES: '#001a66',
  COLOR_DARK_SNAKE_APPLE: '#008080',
  COLOR_DARK_GRID: '#1A1A1A',

  // Colors for LIGHT mode
  COLOR_LIGHT_SNAKE_HEAD: '#32CD32',
  COLOR_LIGHT_SNAKE_TAIL: '#3CB371',
  COLOR_LIGHT_SNAKE_EYES: '#2F4F4F',
  COLOR_LIGHT_SNAKE_APPLE: '#FF4500',
  COLOR_LIGHT_GRID: '#FAF0E6',

  // Colors for COLORFUL mode
  COLOR_COLOR_SNAKE_HEAD: '#ffff00',
  COLOR_COLOR_SNAKE_TAIL: '#003cb3',
  COLOR_COLOR_SNAKE_EYES: '#ff0000',
  COLOR_COLOR_SNAKE_APPLE: '#ff66ff',
  COLOR_COLOR_GRID: '#66ffcc',
});
