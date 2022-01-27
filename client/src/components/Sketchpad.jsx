import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './App.jsx';
import ColorPicker from './ColorPicker.jsx';

const Sketchpad = (props) => {
  const { get, post } = useContext(AppContext);
  const [drawOn, setDrawOn] = useState(false);
  const [color, setColor] = useState('white');
  const [image, setImage] = useState(props.image);
  let canvas, ctx, start, end;

  useEffect(() => {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
  });

  const draw = (e) => {
    setTimeout(() => {
      if (drawOn && start) {
        ctx.beginPath();
        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        start = end;
        end = [e.clientX, e.clientY];
      } else {
        start = end;
        end = [e.clientX, e.clientY];
      }
    }, 100);
  };

  const startDraw = (e) => {
    start = [e.clientX, e.clientY];
    setDrawOn(true);
    console.log(e);
  };

  const endDraw = () => {
    if (drawOn) {
      setDrawOn(false);
      // post(ctx.getImageData(0, 0, canvas.width, canvas.height));
    }
  };

  useEffect(() => {
    ctx.strokeStyle = color;
  }, [color]);

  const clearCanvas = () => {
    ctx.clearRect(0, 0, 500, 500);
  };

  const save = () => {
    setImage(ctx.getImageData(0, 0, canvas.width, canvas.height));
  };

  const restore = () => {
    ctx.putImageData(image, 0, 0);
  };

  return (
    <>
      <div id='sketchpad'>
        <canvas
          onMouseDown={startDraw}
          onMouseUp={endDraw}
          onMouseMove={draw}
          onMouseOut={endDraw}
          id='myCanvas'
          width='500'
          height='500'
          style={{ border: '1px solid #000' }}
        ></canvas>
        <ColorPicker setColor={setColor} />
      </div>
      <div>
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={save}>Save</button>
        <button onClick={restore}>Restore</button>
      </div>
    </>
  );
};

export default Sketchpad;
