import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    let response = await fetch('/api/greetings')
    let greetings = await response.text()
    this.setState({ data: greetings });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.data}</p>
        </header>
      </div>
    );
  }
}

export default App;
