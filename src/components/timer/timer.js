import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.props.initialTime,
      isRunning: false,
      done: this.props.done,
    };
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.timer = setInterval(() => {
        if (this.state.time > 0) {
          this.setState({ time: this.state.time - 1 });
        } else {
          clearInterval(this.timer);
          this.setState({ isRunning: false });
        }
      }, 1000);

      this.setState({ isRunning: true });
    }
  };

  pauseTimer = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  render() {
    const { time, isRunning } = this.state;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      <>
        <button className="icon icon-play" onClick={this.startTimer} disabled={isRunning}></button>
        <button className="icon icon-pause" onClick={this.pauseTimer} disabled={!isRunning}></button>
        {` ${minutes}:${seconds}`}
      </>
    )
  }
}

export default Timer;