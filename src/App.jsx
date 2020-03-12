import React, { Component } from "react";
// import Visualizer from "./Visualizer.jsx";
// import "./style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async getPage() {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  getData() {
    fetch("http://localhost:3000/data")
      .then(res => {
        this.setState(state => ({
          data: JSON.parse(res.body)
        }));
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    console.log("mounted");
    this.getPage();
    this.getData();
  }
  render() {
    return (
      <div className="App">
        <h1> my title </h1>
        <div id="vis">
          <h1>visualizer goes here</h1>
        </div>
      </div>
    );
  }
}

export default App;
