import Settings from './Settings';

export default class CustomTimer {
  constructor(gametick) {
    this.subscribers = [];
    this.loopId = null;
    this.gametick = gametick;
    this.lasttick = +new Date() - gametick;
  }

  loop = timestamp => {
    // if (this.loopId && timestamp - this.lasttick >= this.gametick) {
    //   this.subscribers.forEach(callback => {
    //     this.lasttick = timestamp;
    //     callback(timestamp);
    //   });
    // }

    if (this.loopId) {

      //console.log("Delta Time @ CustomTimer: " + (timestamp - this.lasttick));
      console.log("Time left: " + (timestamp - this.lasttick));
      if (timestamp - this.lasttick >= this.gametick) {
        this.lasttick = timestamp;
        console.log("Gametick over");
        if (Settings.step > 0) {
          Settings.step = 0;
        }
        Settings.totalSteps = this.gametick / 16;
        //Settings.step = 1;
        console.log("Initialize new steps:" + Settings.totalSteps);

      }
      else {
        while (Settings.step * 16 < timestamp - this.lasttick) {

          Settings.step += 1;
        }
      }

      this.subscribers.forEach(callback => {

        callback(timestamp);
      });
    }



    this.loopId = requestAnimationFrame(this.loop);
  };

  start() {
    if (!this.loopId) {
      this.loop();
    }
  }

  stop() {
    if (this.loopId) {
      cancelAnimationFrame(this.loopId);
      this.loopId = null;
    }
  }

  subscribe(callback) {
    if (this.subscribers.indexOf(callback) === -1)
      this.subscribers.push(callback);
  }

  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(s => s !== callback);
  }
}
