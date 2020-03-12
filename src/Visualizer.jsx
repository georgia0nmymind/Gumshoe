import React, { Component } from "react";
import rd3 from "react-d3-library";
// import node from "./visd3.js";

class Vis extends Component {
  getInitialState() {
    return { d3: "" };
  }

  componentDidMount() {
    this.setState({ d3: node });
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    );
  }
}

export default Vis;
