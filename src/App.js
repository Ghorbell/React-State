import "./App.css";
import React, { Component } from "react";
import List from "./Component/List";

export class App extends Component {
  state = {
    show: false,
  };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="App">
        {this.state.show ? <List /> : <h1 className="see">Click to see my profile</h1>}
        <button className="btn" onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default App;
