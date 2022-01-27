import React from 'react';

class Sketchpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: [0, 0],
      end: [0, 0],
      draw: false,
    };
    this.startDraw = this.startDraw.bind(this);
    this.endDraw = this.endDraw.bind(this);
    this.draw = this.draw.bind(this);
  }

  draw(e) {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    if (this.state.draw) {
      ctx.moveTo(this.state.start[0], this.state.start[1]);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    }
    this.setState({ start: this.state.end, end: [e.clientX, e.clientY] });
  }

  startDraw() {
    this.setState({ draw: true });
  }

  endDraw() {
    this.setState({ draw: false });
  }

  render() {
    return (
      <>
        <canvas
          onMouseDown={(e) => this.startDraw(e)}
          onMouseUp={this.endDraw}
          onMouseMove={this.draw}
          id='myCanvas'
          width='500'
          height='500'
          style={{ border: '1px solid #000' }}
        ></canvas>
      </>
    );
  }
}

export default Sketchpad;
