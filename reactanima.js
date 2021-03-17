import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    classNames: "",
    animationFinished: false,
    showAnimationStartLabel: false
  };

  startStopAnimation = () => {
    const { classNames } = this.state;

    this.setState({ classNames: classNames ? "" : "animation" });
  };

  onAnimationStart = () => {
    this.setState({
      animationFinished: false,
      showAnimationStartLabel: true
    });
  };

  onAnimationEnd = () => {
    this.setState({
      animationFinished: true,
      showAnimationStartLabel: false
    });
  };

  render() {
    const { animationFinished, showAnimationStartLabel } = this.state;
    const displayState = animationFinished ? "block" : "none";
    const displayStateAnimationStart =
      !animationFinished && showAnimationStartLabel ? "block" : "none";

    return (
      <div className="App">
        <button onClick={this.startStopAnimation}>
          Start/stop the animation
        </button>

        <div style={{ display: displayStateAnimationStart }}>
          <h1>Animation Start</h1>
        </div>
        <div style={{ display: displayState }}>
          <h1>Animation Finished</h1>
        </div>

        <div className="demo">
          <div
            className={`box ${this.state.classNames}`}
            onAnimationEnd={this.onAnimationEnd}
            onAnimationStart={this.onAnimationStart}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
