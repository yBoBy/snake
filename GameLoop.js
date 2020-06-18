import Constants from './Constants';

const GameLoop = (entities, {touches, dispatch, events}) => {
  let head = entities.head;

  if (events.length) {
    for (e of events) {
      if (e.type === 'right') {
        head.xSpeed = 1;
        head.ySpeed = 0;
      } else if (e.type === 'left') {
        head.xSpeed = -1;
        head.ySpeed = 0;
      } else if (e.type === 'up') {
        head.xSpeed = 0;
        head.ySpeed = -1;
      } else if (e.type === 'down') {
        head.xSpeed = 0;
        head.ySpeed = 1;
      }
    }
  }

  head.position = [
    head.position[0] + head.xSpeed,
    head.position[1] + head.ySpeed,
  ];
  console.log('Tick');

  // for (let i = 0; i <= 1; i++) {
  //   if (i === 1) {

  //   }
  // }

  return entities;
};

export {GameLoop};
