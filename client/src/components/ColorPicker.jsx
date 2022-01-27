import React from 'react';
import { PhotoshopPicker } from 'react-color';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '#fff',
      currentColor: '#fff',
    };
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChangeComplete(color) {
    this.setState({ background: color.hex });
    this.props.setColor(color.hex);
  }

  currentColor(color) {
    this.setState({ currentColor: color.hex });
  }

  render() {
    return (
      <PhotoshopPicker
        color={this.state.background}
        onChange={this.handleChangeComplete}
      />
    );
  }
}

export default ColorPicker;
