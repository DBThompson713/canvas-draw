import React, { Component } from "react";

class ColourSelector extends Component {
  render() {
    const { hex } = this.props;
    return (
      <input
        type="color"
        defaultValue={hex}
        onChange={event => console.log(event)}
      />
    );
  }
  static defaultProps = {
    hex: "#ffffff"
  };
}

export default ColourSelector;
