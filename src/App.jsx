import React, { Component } from "react";
import CharAdder from "./addChar.jsx";
import RelAdder from "./addRel.jsx";
// import Visualizer from "Visualizer";
// import "./style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  updateData() {
    fetch("/data", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.json())
      .then(dataset => {
        console.log(dataset);
        this.setState({
          data: dataset
        });
      })
      .then(() => console.log(this.state))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.updateData();
  }

  render() {
    return (
      <div className="App">
        <h1> my title </h1>
        <CharAdder updateData={this.updateData} />
        <RelAdder updateData={this.updateData} data={this.state.data} />
      </div>
    );
  }
}

export default App;
