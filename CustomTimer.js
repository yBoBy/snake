export default class CustomTimer {
  constructor(gametick) {
    this.subscribers = [];
    this.loopId = null;
    this.gametick = gametick;
    this.lasttick = +new Date() - gametick;
  }

  loop = timestamp => {
    if (this.loopId && timestamp - this.lasttick >= this.gametick) {
      this.subscribers.forEach(callback => {
        this.lasttick = timestamp;
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
