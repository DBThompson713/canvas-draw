import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Drawing Pad</h1>
        <ColourSelector hex="#ff424b" />
      </div>
    );
  }
}

export default App;
