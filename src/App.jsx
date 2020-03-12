import React, { Component } from "react";
import Visualizer from "Visualizer";
// import "./style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getPage() {
    fetch("http://localhost:3000/")
      .then(res => {
        this.setState(state => ({
          data: JSON.parse(res.body)
        }));
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getPage();
  }
  render() {
    return (
      <div className="App">
        <h1> my title </h1>
        <div id="vis">
          <Visualizer data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
