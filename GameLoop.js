import Constants from './Constants';
import _ from 'underscore';
import Settings from './Settings';

const moveElement = (element, direction, reverse = false) => {
  if (!reverse) {
    element[0] += direction[0];
    element[1] += direction[1];
  } else {
    element[0] -= direction[0];
    element[1] -= direction[1];
  }
  return element;
};

const GameLoop = (entities, {touches, dispatch, events}) => {
  let head = entities.head;
  let tail = entities.tail;
  let apple = entities.apple;
  let xyMax = entities.head.xyMax;

  const checkCollision = (posA, posB) => {
    posA = Object.values(posA);
    console.log(posA);
    console.log(posB);
    if (posA[0] === posB[0] && posA[1] === posB[1]) {
      return true;
    }
    false;
  };

  const randomPosition = () => {
    let x = Math.floor(Math.random() * Settings.GRID_SIZE);
    let y = Math.floor(Math.random() * Settings.GRID_SIZE);

    return [x, y];
  };

  //Save Head position before position or direction changes

  let preMoveHeadPos = Object.values(head.position);
  let preMoveHeadDir = Object.values(head.direction);

  if (events.length) {
    e = events.pop();
    if (e.type === 'right' && head.direction !== Constants.LEFT) {
      head.direction = Constants.RIGHT;
    } else if (e.type === 'left' && head.direction !== Constants.RIGHT) {
      head.direction = Constants.LEFT;
    } else if (e.type === 'up' && head.direction !== Constants.DOWN) {
      head.direction = Constants.UP;
    } else if (e.type === 'down' && head.direction !== Constants.UP) {
      head.direction = Constants.DOWN;
    }
  }

  //Move head
  head.position = moveElement(head.position, head.direction);

  //Check if head hits gamefield borders
  if (
    head.position[0] < 0 ||
    head.position[0] >= xyMax ||
    head.position[1] >= xyMax ||
    head.position[1] < 0
  ) {
    dispatch({type: 'game-over'});
    head.position = moveElement(head.position, head.direction, true);
  } else {
    //Move Tails
    tail.headPosition = preMoveHeadPos;
    tail.headDirection = Object.values(head.direction);

    if (!_.isEqual(preMoveHeadDir, Object.values(head.direction))) {
      tail.elements[0].isCornerPart = true;
    } else {
      tail.elements[0].isCornerPart = false;
    }
  }

  //Check if head hits apple
  if (checkCollision(head.position, apple.position)) {
    tail.elements.push({
      position: null,
      form: {...tail.elements[tail.elements.length - 1].form},
      containsApple: false,
      direction: {...tail.elements[tail.elements.length - 1].direction},
    });
    apple.position = randomPosition();
  }

  //Check if head hits its own tails

  return entities;
};

export {GameLoop};
