import React from 'react';

class Sketchpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draw: false,
      color: 'black',
    };
    this.canvas = null;
    this.ctx = null;
    this.start = [0, 0];
    this.end = [0, 0];

    this.startDraw = this.startDraw.bind(this);
    this.endDraw = this.endDraw.bind(this);
    this.draw = this.draw.bind(this);
    this.setColor = this.setColor.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
  }

  componentDidMount() {
    this.canvas = document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext('2d');
  }

  draw(e) {
    if (this.state.draw) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.start[0], this.start[1]);
      this.ctx.lineTo(e.clientX, e.clientY);
      this.ctx.stroke();
    }
    this.start = this.end;
    this.end = [e.clientX, e.clientY];
  }

  startDraw() {
    this.setState({ draw: true });
  }

  endDraw() {
    this.setState({ draw: false });
  }

  setColor(e) {
    this.ctx.strokeStyle = e.target.value;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, 500, 500);
  }

  render() {
    return (
      <>
        <canvas
          onMouseDown={this.startDraw}
          onMouseUp={this.endDraw}
          onMouseMove={this.draw}
          id='myCanvas'
          width='500'
          height='500'
          style={{ border: '1px solid #000' }}
        ></canvas>
        <select onChange={this.setColor}>
          <option>Black</option>
          <option>Blue</option>
          <option>Red</option>
          <option>Green</option>
          <option>Orange</option>
        </select>
        <button onClick={this.clearCanvas}>Clear</button>
      </>
    );
  }
}

export default Sketchpad;
