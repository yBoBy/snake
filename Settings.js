import Constants from './Constants'

export default (Settings = {
  gamespeed: 500,
  step: 0,
  totalSteps: 0,

  // default color scheme = light
  colorSnakeHead: Constants.COLOR_LIGHT_SNAKE_HEAD,
  colorSnakeTail: Constants.COLOR_LIGHT_SNAKE_TAIL,
  colorSnakeEyes: Constants.COLOR_LIGHT_SNAKE_EYES,
  colorSnakeApple: Constants.COLOR_LIGHT_SNAKE_APPLE,
  colorGridBackGround: Constants.COLOR_LIGHT_GRID,

  GRID_SIZE: Constants.GRIDSIZE_MEDIUM,
});
