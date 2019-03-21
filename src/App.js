import React, { Component } from "react";
import "./App.css";
import List from "./List";

class App extends Component {
  state = {
    text: "",
    items: []
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };
  onSubmit = e => {
    this.setState({
      items: [...this.state.items, this.state.text],
      text: ""
    });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.text} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
