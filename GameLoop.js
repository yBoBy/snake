import Constants from './Constants';

const GameLoop = (entities, {touches, dispatch, events}) => {
  let head = entities.head;
  let tail = entities.tail;
  let apple = entities.apple;
  let xyMax = entities.head.xyMax;

  const checkCollision = (posA, posB) => {
    if (posA[0] === posB[0] && posA[1] === posB[1]) {
      return true;
    }
    false;
  };

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

  if (events.length) {
    e = events.pop();
    console.log(e);
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
  }

  //Move Tail
  //tail.head = head;

  //Check if head hits its own tails

  //Check if head hits apple
  // if (checkCollision(head.position, apple.position)) {
  //   //TODO: Grow
  // }

  return entities;
};

export {GameLoop};
